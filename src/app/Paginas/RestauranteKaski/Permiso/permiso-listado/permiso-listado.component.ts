import { Component } from '@angular/core';
import { PermisoServicio } from '../../../../Servicios/RestauranteKaski/PermisoServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarRestauranteKaskiComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { Permiso } from '../.././../../Modelos/ModeloRestauranteKaski/Permiso';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { PermisoCrearRestauranteKaskiComponent } from '../permiso-crear/permiso-crear.component';

declare var bootstrap: any;

@Component({
  selector: 'app-permiso-listado-RestauranteKaski',
  imports: [FormsModule, CommonModule, SidebarRestauranteKaskiComponent, PermisoCrearRestauranteKaskiComponent],
  templateUrl: './permiso-listado.component.html',
  styleUrl: './permiso-listado.component.css'
})
export class PermisoListadoRestauranteKaskiComponent {
  NombreEmpresa = Entorno.NombreEmpresaRestauranteKaski;
  LogoEmpresa = Entorno.LogoRestauranteKaski;
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
    this.Servicio.ObtenerResumenPermisos().subscribe({
      next: (respuesta) => {
        const permisosDesdeRutas: string[] = respuesta.permisos;
        this.Servicio.Listado().subscribe({
          next: (data: any) => {
            this.Datos = data;

            const permisosCreados: string[] = data.map((p: any) => p.NombrePermiso);
            this.PermisosPendientes = permisosDesdeRutas.filter(p => !permisosCreados.includes(p));

            this.PermisosExtras = permisosCreados.filter(p => !permisosDesdeRutas.includes(p));
          },
          error: (err) => {
            console.error('Error al obtener registros creados:', err);
          }
        });
      },
      error: (err) => {
        console.error('Error al obtener registros desde rutas:', err);
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
