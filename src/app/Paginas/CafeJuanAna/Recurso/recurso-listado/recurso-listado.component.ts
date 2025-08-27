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
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

declare var bootstrap: any;

@Component({
  selector: 'app-recurso-listado-CafeJuanAna',
  imports: [FormsModule, CommonModule, SidebarCafeJuanAnaComponent, RecursoCrearCafeJuanAnaComponent, SpinnerGlobalComponent],
  templateUrl: './recurso-listado.component.html',
  styleUrl: './recurso-listado.component.css'
})
export class RecursoListadoCafeJuanAnaComponent {
  Spinner: boolean = false;
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
    this.Spinner = true;
    this.Servicio.Listado().subscribe({
      next: (Respuesta: any) => {
        this.Datos = Respuesta.data;
        this.ObtenerTablasPendientes();
        this.Spinner = false;
      },
      error: (error) => {
        this.Spinner = false;
        const tipo = error?.error?.tipo;
        const mensaje =
          error?.error?.error?.message ||
          error?.error?.message ||
          'Ocurrió un error inesperado.';
        if (tipo === 'Alerta') {
          this.Alerta.MostrarAlerta(mensaje);
        } else {
          this.Alerta.MostrarError({ error: { message: mensaje } });
        }
      }
    });
  }
  ObtenerTablasPendientes() {
    this.Spinner = true;
    this.Servicio.ObtenerPermisosDisponibles().subscribe({
      next: (Respuesta: any[]) => {
        const tablasDefinidas = Respuesta.map(t => t.Tabla);
        const recursosCreados = this.Datos.map(r => r.NombreRecurso);

        this.TablasPendientes = tablasDefinidas.filter(nombre => !recursosCreados.includes(nombre));

        this.TablasExtras = recursosCreados
          .filter((nombre): nombre is string => !!nombre && !tablasDefinidas.includes(nombre));
        this.Spinner = false;
      },
      error: (error) => {
        this.Spinner = false;
        const tipo = error?.error?.tipo;
        const mensaje =
          error?.error?.error?.message ||
          error?.error?.message ||
          'Ocurrió un error inesperado.';
        if (tipo === 'Alerta') {
          this.Alerta.MostrarAlerta(mensaje);
        } else {
          this.Alerta.MostrarError({ error: { message: mensaje } });
        }
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
    this.Spinner = true;
    this.Servicio.Editar(Datos).subscribe({
      next: (Respuesta) => {
        this.CodigoEditando = null;
        this.Listado();
        if (Respuesta?.tipo === 'Éxito') {
          this.Alerta.MostrarExito(Respuesta.message);
        }
        this.Spinner = false;
      },
      error: (error) => {
        this.Spinner = false;
        const tipo = error?.error?.tipo;
        const mensaje =
          error?.error?.error?.message ||
          error?.error?.message ||
          'Ocurrió un error inesperado.';
        if (tipo === 'Alerta') {
          this.Alerta.MostrarAlerta(mensaje);
        } else {
          this.Alerta.MostrarError({ error: { message: mensaje } });
        }
      }
    });
  }
  Eliminar(Codigo: number) {
    this.Alerta.Confirmacion(
      '¿Estás seguro?',
      'Esta acción eliminará el registro.'
    ).then(confirmado => {
      if (confirmado) {
        this.Spinner = true;
        this.Servicio.Eliminar(Codigo).subscribe({
          next: (Respuesta) => {
            this.Listado();
            this.Spinner = false;
            if (Respuesta?.tipo === 'Éxito') {
              this.Alerta.MostrarExito(Respuesta.message);
            }
          },
          error: (error) => {
            this.Spinner = false;
            const tipo = error?.error?.tipo;
            const mensaje =
              error?.error?.error?.message ||
              error?.error?.message ||
              'Ocurrió un error inesperado.';
            if (tipo === 'Alerta') {
              this.Alerta.MostrarAlerta(mensaje);
            } else {
              this.Alerta.MostrarError({ error: { message: mensaje } });
            }
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
