import { Component } from '@angular/core';
import { UsuarioServicio } from '../../../../Servicios/ConstructoraMorgan/UsuarioServicio';
import { RolServicio } from '../../../../Servicios/ConstructoraMorgan/RolServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarConstructoraMorganComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { Usuario } from '../.././../../Modelos/ModeloConstructoraMorgan/Usuario';
import { Rol } from '../.././../../Modelos/ModeloConstructoraMorgan/Rol';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { UsuarioCrearConstructoraMorganComponent } from '../usuario-crear/usuario-crear.component';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';
import { R3SelectorScopeMode } from '@angular/compiler';
type UsuarioConRol = Usuario & { NombreRol: string, Clave?: string; };


declare var bootstrap: any;

@Component({
  selector: 'app-usuario-listado-ConstructoraMorgan',
  imports: [FormsModule, CommonModule, SidebarConstructoraMorganComponent, UsuarioCrearConstructoraMorganComponent, SpinnerGlobalComponent],
  templateUrl: './usuario-listado.component.html',
  styleUrl: './usuario-listado.component.css'
})
export class UsuarioListadoConstructoraMorganComponent {
  NombreEmpresa = Entorno.NombreEmpresaConstructoraMorgan;
  LogoEmpresa = Entorno.LogoConstructoraMorgan;
  DatosA: Usuario[] = [];
  Rol: Rol[] = [];
  Datos: UsuarioConRol[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador: string = '';
  Spinner: boolean = false;

  constructor(private Servicio: UsuarioServicio, private router: Router, private Alerta: AlertaServicio, private RolServicio: RolServicio) { }

  ngOnInit() {
    this.CargarRoles();
    this.Listado();
  }
  CargarRoles() {
    this.Spinner = true;
    this.RolServicio.Listado().subscribe({
      next: (Respuesta) => {
        this.Rol = Respuesta.data;
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
  Listado() {
    this.Spinner = true;
    this.Servicio.Listado().subscribe({
      next: async (Respuesta: any) => {
        this.DatosA = Respuesta.data;
        const datosConRol = await Promise.all(Respuesta.data.map(async (usuario: any) => {
          try {
            const rol = await this.RolServicio.ObtenerPorCodigo(String(usuario.CodigoRol)).toPromise();
            return {
              ...usuario,
              NombreRol: rol?.data.NombreRol || 'Sin Rol'
            };
          } catch (error) {
            console.error('Error al obtener rol para el usuario:', usuario.CodigoUsuario, error);
            return {
              ...usuario,
              NombreRol: 'Error al obtener rol'
            };
          }
        }));

        this.Datos = datosConRol;
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

  Buscador(): UsuarioConRol[] {
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
        coincide(Datos.CodigoUsuario) ||
        coincide(Datos.NombreUsuario) ||
        coincide(Datos.NombreRol) ||
        coincide(estatusTexto)
      );
    });
  }

  ActivarEdicion(Datos: Usuario) {
    this.CodigoEditando = Datos.CodigoUsuario!;
  }

  CancelarEdicion() {
    this.CodigoEditando = null;
    this.Listado();
  }

  Editar(Datos: Usuario) {
    this.Spinner = true;
    this.Servicio.Editar(Datos).subscribe({
      next: (Respuesta) => {
        this.CodigoEditando = null;
        this.Spinner = false;
        this.Listado();
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
