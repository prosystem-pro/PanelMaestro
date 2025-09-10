import { Component } from '@angular/core';
import { EmpresaServicio } from '../../../../Servicios/RestauranteElTule/EmpresaServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarRestauranteElTuleComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { EmpresaCrearRestauranteElTuleComponent } from '../empresa-crear/empresa-crear.component';
import { Empresa } from '../.././../../Modelos/ModeloRestauranteElTule/Empresa';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

declare var bootstrap: any;
@Component({
  selector: 'app-empresa-listado-RestauranteElTule',
  imports: [FormsModule, CommonModule, SidebarRestauranteElTuleComponent, EmpresaCrearRestauranteElTuleComponent, SpinnerGlobalComponent],
  templateUrl: './empresa-listado.component.html',
  styleUrl: './empresa-listado.component.css'
})
export class EmpresaListadoRestauranteElTuleComponent {
  Spinner: boolean = false;
  NombreEmpresa = Entorno.NombreEmpresaRestauranteElTule;
  LogoEmpresa = Entorno.LogoRestauranteElTule;

  Datos: Empresa[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador: string = '';
  hoveredCard: number | null = null;

  constructor(private Servicio: EmpresaServicio, private router: Router, private Alerta: AlertaServicio) { }

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
