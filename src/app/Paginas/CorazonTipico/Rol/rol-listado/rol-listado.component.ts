import { Component } from '@angular/core';
import { RolServicio } from '../../../../Servicios/CorazonTipico/RolServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarCorazonTipicoComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { RolCrearCorazonTipicoComponent } from '../rol-crear/rol-crear.component';
import { Rol } from '../.././../../Modelos/ModeloCorazonTipico/Rol';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

declare var bootstrap: any;

@Component({
  selector: 'app-rol-listado-CorazonTipico',
  imports: [FormsModule, CommonModule, SidebarCorazonTipicoComponent, RolCrearCorazonTipicoComponent, SpinnerGlobalComponent],
  templateUrl: './rol-listado.component.html',
  styleUrl: './rol-listado.component.css'
})
export class RolListadoCorazonTipicoComponent {
  Spinner: boolean = false;
  NombreEmpresa = Entorno.NombreEmpresaCorazonTipico;
  LogoEmpresa = Entorno.LogoCorazonTipico;
  Datos: Rol[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador: string = '';

  constructor(private Servicio: RolServicio, private router: Router, private Alerta: AlertaServicio) { }

  ngOnInit() {
    this.Listado();
  }

  Listado() {
    this.Spinner = true;
    this.Servicio.Listado().subscribe({
      next: (Respuesta: any) => {
        this.Datos = Respuesta.data;
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

  Buscador(): Rol[] {
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
        coincide(Datos.CodigoRol) ||
        coincide(Datos.NombreRol) ||
        coincide(estatusTexto)
      );
    });
  }

  ActivarEdicion(Datos: Rol) {
    this.CodigoEditando = Datos.CodigoRol!;
  }

  CancelarEdicion() {
    this.CodigoEditando = null;
    this.Listado();
  }

  Editar(Datos: Rol) {
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
