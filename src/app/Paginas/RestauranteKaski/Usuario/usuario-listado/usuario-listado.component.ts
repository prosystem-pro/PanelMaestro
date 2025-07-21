import { Component } from '@angular/core';
import { UsuarioServicio } from '../../../../Servicios/RestauranteKaski/UsuarioServicio';
import { RolServicio } from '../../../../Servicios/RestauranteKaski/RolServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarRestauranteKaskiComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { Usuario } from '../.././../../Modelos/ModeloRestauranteKaski/Usuario';
import { Rol } from '../.././../../Modelos/ModeloRestauranteKaski/Rol';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { UsuarioCrearRestauranteKaskiComponent } from '../usuario-crear/usuario-crear.component';
type UsuarioConRol = Usuario & { NombreRol: string, Clave?: string; };


declare var bootstrap: any;

@Component({
  selector: 'app-usuario-listado',
  imports: [FormsModule, CommonModule, SidebarRestauranteKaskiComponent, UsuarioCrearRestauranteKaskiComponent],
  templateUrl: './usuario-listado.component.html',
  styleUrl: './usuario-listado.component.css'
})
export class UsuarioListadoRestauranteKaskiComponent {
  NombreEmpresa = Entorno.NombreEmpresaRestauranteKaski;
  LogoEmpresa = Entorno.LogoRestauranteKaski;
  DatosA: Usuario[] = [];
  Rol: Rol[] = [];
  Datos: UsuarioConRol[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador: string = '';

  constructor(private Servicio: UsuarioServicio, private router: Router, private Alerta: AlertaServicio, private RolServicio: RolServicio) { }

  ngOnInit() {
    this.CargarRoles();
    this.Listado();
  }
  CargarRoles() {
    this.RolServicio.Listado().subscribe({
      next: (roles) => {
        this.Rol = roles;
      },
      error: (err) => console.error('Error cargando roles', err)
    });
  }
  Listado() {
    this.Servicio.Listado().subscribe({
      next: async (datos: Usuario[]) => {
        this.DatosA = datos;

        const datosConRol = await Promise.all(datos.map(async usuario => {
          try {
            const rol = await this.RolServicio.ObtenerPorCodigo(String(usuario.CodigoRol)).toPromise();
            return {
              ...usuario,
              NombreRol: rol?.NombreRol || 'Sin Rol'
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
      },
      error: (error) => {
        console.error(error);
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
