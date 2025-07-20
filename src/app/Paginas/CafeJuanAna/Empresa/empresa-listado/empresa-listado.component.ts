import { Component } from '@angular/core';
import { EmpresaServicio } from '../../../../Servicios/CafeJuanAna/EmpresaServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarCafeJuanAnaComponent } from "../../../CafeJuanAna/Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { EmpresaCrearCafeJuanAnaComponent } from '../empresa-crear/empresa-crear.component';
import { Empresa } from '../.././../../Modelos/ModeloCafeJuanAna/Empresa';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';

declare var bootstrap: any;
@Component({
  selector: 'app-empresa-listado',
  imports: [FormsModule, CommonModule, SidebarCafeJuanAnaComponent, EmpresaCrearCafeJuanAnaComponent],
  templateUrl: './empresa-listado.component.html',
  styleUrl: './empresa-listado.component.css'
})
export class EmpresaListadoCafeJuanAnaComponent {
  NombreEmpresa = Entorno.NombreEmpresaCafeJuanAna;
  LogoEmpresa = Entorno.LogoCafeJuanAna;
  Datos: Empresa[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador: string = '';
  hoveredCard: number | null = null;

  constructor(private Servicio: EmpresaServicio, private router: Router, private Alerta: AlertaServicio) { }

  ngOnInit() {
    this.Listado();
  }

  Listado() {
    this.Servicio.Listado().subscribe({
      next: (data: any) => {
        this.Datos = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  Buscador(): Empresa[] {
    const texto = this.FiltroBuscador.toLowerCase();
    const textoSinEspacio = texto.trim();
    const esBusquedaExacta = texto.endsWith(' ');

    const coincide = (campo: string | undefined | null) => {
      const valor = (campo ?? '').toLowerCase();
      return esBusquedaExacta ? valor === textoSinEspacio : valor.includes(textoSinEspacio);
    };

    return this.Datos.filter(Datos => {
      const estatusTexto =
        Datos.Estatus === 1 ? 'activo' :
          Datos.Estatus === 2 ? 'inactivo' :
            Datos.Estatus === 3 ? 'eliminado' : '';

      return (
        coincide(Datos.NombreEmpresa) ||
        coincide(Datos.Direccion) ||
        coincide(Datos.Eslogan) ||
        coincide(Datos.Celular) ||
        coincide(estatusTexto)
      );
    });
  }

  ActivarEdicion(Datos: Empresa) {
    this.CodigoEditando = Datos.CodigoEmpresa!;
  }

  CancelarEdicion() {
    this.CodigoEditando = null;
    this.Listado();
  }

  Editar(Datos: Empresa) {
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
