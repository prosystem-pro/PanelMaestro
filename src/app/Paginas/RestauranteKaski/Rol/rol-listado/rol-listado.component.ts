import { Component } from '@angular/core';
import { RolServicio } from '../../../../Servicios/RestauranteKaski/RolServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarRestauranteKaskiComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { RolCrearRestauranteKaskiComponent } from '../rol-crear/rol-crear.component';
import { Rol } from '../.././../../Modelos/ModeloRestauranteKaski/Rol';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';

declare var bootstrap: any;

@Component({
  selector: 'app-rol-listado',
  imports: [FormsModule, CommonModule, SidebarRestauranteKaskiComponent, RolCrearRestauranteKaskiComponent],
  templateUrl: './rol-listado.component.html',
  styleUrl: './rol-listado.component.css'
})
export class RolListadoRestauranteKaskiComponent {
  NombreEmpresa = Entorno.NombreEmpresaRestauranteKaski;
  LogoEmpresa = Entorno.LogoRestauranteKaski;
  Datos: Rol[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador: string = '';

  constructor(private Servicio: RolServicio, private router: Router, private Alerta: AlertaServicio) { }

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
