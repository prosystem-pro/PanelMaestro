import { Component } from '@angular/core';
import { PermisoServicio } from '../../../../Servicios/ChocosDeLaAbuela/PermisoServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarChocosDeLaAbuelaComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { Permiso } from '../.././../../Modelos/ModeloChocosDeLaAbuela/Permiso';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { PermisoCrearChocosDeLaAbuelaComponent } from '../permiso-crear/permiso-crear.component';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

declare var bootstrap: any;

@Component({
  selector: 'app-permiso-listado-ChocosDeLaAbuela',
  imports: [FormsModule, CommonModule, SidebarChocosDeLaAbuelaComponent, PermisoCrearChocosDeLaAbuelaComponent, SpinnerGlobalComponent],
  templateUrl: './permiso-listado.component.html',
  styleUrl: './permiso-listado.component.css'
})
export class PermisoListadoChocosDeLaAbuelaComponent {
  Spinner: boolean = false;
  NombreEmpresa = Entorno.NombreEmpresaChocosDeLaAbuela;
  LogoEmpresa = Entorno.LogoChocosDeLaAbuela;
  Datos: Permiso[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador: string = '';
  PermisosPendientes: string[] = [];
  PermisosExtras: string[] = [];


  constructor(private Servicio: PermisoServicio, private router: Router, private Alerta: AlertaServicio) { }

  ngOnInit() {
    this.Listado();
  }

  Listado() {
    this.Spinner = true;
    this.Servicio.ObtenerResumenPermisos().subscribe({
      next: (Respuesta) => {
        const permisosDesdeRutas: string[] = Respuesta.data.permisos;
        this.Servicio.Listado().subscribe({
          next: (Respuesta: any) => {
            this.Datos = Respuesta.data;

            const permisosCreados: string[] = Respuesta.data.map((p: any) => p.NombrePermiso);
            this.PermisosPendientes = permisosDesdeRutas.filter(p => !permisosCreados.includes(p));

            this.PermisosExtras = permisosCreados.filter(p => !permisosDesdeRutas.includes(p));
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

  Buscador(): Permiso[] {
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
        coincide(Datos.CodigoPermiso) ||
        coincide(Datos.NombrePermiso) ||
        coincide(estatusTexto)
      );
    });
  }

  ActivarEdicion(Datos: Permiso) {
    this.CodigoEditando = Datos.CodigoPermiso!;
  }

  CancelarEdicion() {
    this.CodigoEditando = null;
    this.Listado();
  }

  Editar(Datos: Permiso) {
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
