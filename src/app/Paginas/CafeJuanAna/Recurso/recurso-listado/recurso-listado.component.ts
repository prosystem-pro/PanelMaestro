import { Component } from '@angular/core';
import { RecursoServicio } from '../../../../Servicios/CafeJuanAna/RecursoServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarCafeJuanAnaComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { RecursoCrearCafeJuanAnaComponent } from '../recurso-crear/recurso-crear.component';
import { Recurso } from '../.././../../Modelos/ModeloCafeJuanAna/Recurso';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';

declare var bootstrap: any;

@Component({
  selector: 'app-recurso-listado-CafeJuanAna',
  imports: [FormsModule, CommonModule, SidebarCafeJuanAnaComponent, RecursoCrearCafeJuanAnaComponent],
  templateUrl: './recurso-listado.component.html',
  styleUrl: './recurso-listado.component.css'
})
export class RecursoListadoCafeJuanAnaComponent {
  NombreEmpresa = Entorno.NombreEmpresaCafeJuanAna;
  LogoEmpresa = Entorno.LogoCafeJuanAna;
  Datos: Recurso[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador: string = '';
  TablasPendientes: string[] = [];
  TablasExtras: string[] = [];


  constructor(private Servicio: RecursoServicio, private router: Router, private Alerta: AlertaServicio) { }

  ngOnInit() {
    this.Listado();
  }

  Listado() {
    this.Servicio.Listado().subscribe({
      next: (data: any) => {
        this.Datos = data;
        this.ObtenerTablasPendientes(); // ← Llamada segura después de llenar Datos
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ObtenerTablasPendientes() {
    this.Servicio.ObtenerPermisosDisponibles().subscribe({
      next: (tablasDesdeRutas: any[]) => {
        const tablasDefinidas = tablasDesdeRutas.map(t => t.Tabla);
        const recursosCreados = this.Datos.map(r => r.NombreRecurso);

        this.TablasPendientes = tablasDefinidas.filter(nombre => !recursosCreados.includes(nombre));

        this.TablasExtras = recursosCreados
          .filter((nombre): nombre is string => !!nombre && !tablasDefinidas.includes(nombre));
      },
      error: (err) => {
        console.error('Error cargando permisos disponibles:', err);
      }
    });
  }

  Buscador(): Recurso[] {
    const texto = this.FiltroBuscador.toLowerCase();
    const textoSinEspacio = texto.trim();
    const esBusquedaExacta = texto.endsWith(' ');

    const coincide = (campo: string | number | undefined | null) => {
      const valor = (campo ?? '').toString().toLowerCase();
      return esBusquedaExacta ? valor === textoSinEspacio : valor.includes(textoSinEspacio);
    };

    return this.Datos.filter(Datos => {
      const estatusTexto =
        Datos.Estatus === 1 ? 'Activo' :
          Datos.Estatus === 2 ? 'Inactivo' :
            Datos.Estatus === 3 ? 'Eliminado' : '';

      return (
        coincide(Datos.CodigoRecurso) ||
        coincide(Datos.NombreRecurso) ||
        coincide(estatusTexto)
      );
    });
  }

  ActivarEdicion(Datos: Recurso) {
    this.CodigoEditando = Datos.CodigoRecurso!;
  }

  CancelarEdicion() {
    this.CodigoEditando = null;
    this.Listado();
  }

  Editar(Datos: Recurso) {
    this.Servicio.Editar(Datos).subscribe({
      next: () => {
        this.CodigoEditando = null;
        this.Listado();
        this.Alerta.MostrarExito('Registro actualizado correctamente.');
      },
      error: (err) => {
        this.Alerta.MostrarError(err);
      }
    });
  }
  Eliminar(Codigo: number) {
    this.Alerta.Confirmacion(
      '¿Estás seguro?',
      'Esta acción eliminará el registro.'
    ).then(confirmado => {
      if (confirmado) {
        this.Servicio.Eliminar(Codigo).subscribe({
          next: () => {
            this.Listado();
            this.Alerta.MostrarExito('Registro eliminado correctamente.');
          },
          error: (err) => {
            this.Alerta.MostrarError(err);
          }
        });
      }
    });
  }

  Navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

  Recargar() {
    this.Listado();
    const modal = bootstrap.Modal.getInstance(document.getElementById('CrearModal'));
    modal?.hide();
  }

  AbrirModalCrear() {
    const modal = new bootstrap.Modal(document.getElementById('CrearModal'));
    modal.show();
  }

}
