import { Component } from '@angular/core';
import { EmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/EmpresaServicio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarQualityAssuranceProSystemComponent } from "../../Sidebar/sidebar.component";
import { Entorno } from '../../../../Entornos/Entorno';
import { Router } from '@angular/router';
import { EmpresaCrearQualityAssuranceProSystemComponent } from '../empresa-crear/empresa-crear.component';
import { Empresa } from '../.././../../Modelos/ModeloQualityAssuranceProSystem/Empresa';
import { TipoEmpresa } from '../../../../Modelos/ModeloQualityAssuranceProSystem/TipoEmpresa';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';
import { TipoEmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/TipoEmpresaServicio';

declare var bootstrap: any;
@Component({
  selector: 'app-empresa-listado-QualityAssuranceProSystem',
  imports: [FormsModule, CommonModule, SidebarQualityAssuranceProSystemComponent, EmpresaCrearQualityAssuranceProSystemComponent, SpinnerGlobalComponent],
  templateUrl: './empresa-listado.component.html',
  styleUrl: './empresa-listado.component.css'
})
export class EmpresaListadoQualityAssuranceProSystemComponent {
  Spinner: boolean = false;
  NombreEmpresa = Entorno.NombreEmpresaQualityAssuranceProSystem;
  LogoEmpresa = Entorno.LogoQualityAssuranceProSystem;

  Datos: Empresa[] = [];
  TiposEmpresa: TipoEmpresa[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador: string = '';
  hoveredCard: number | null = null;

  constructor(
    private Servicio: EmpresaServicio,
    private TipoEmpresaServicio: TipoEmpresaServicio,
    private router: Router,
    private Alerta: AlertaServicio
  ) { }

  ngOnInit() {
    this.Listado();
    this.CargarTiposEmpresa();
  }

  CargarTiposEmpresa() {
    this.TipoEmpresaServicio.Listado().subscribe({
      next: (Respuesta: any) => {
        this.TiposEmpresa = Array.isArray(Respuesta?.data) ? Respuesta.data : [];
      },
      error: (error) => {
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
        coincide(Datos.Telefono) ||
        coincide(this.ObtenerNombreTipoEmpresa(Datos.CodigoTipoEmpresa)) ||
        coincide(estatusTexto)
      );
    });
  }

  ObtenerNombreTipoEmpresa(CodigoTipoEmpresa?: number): string {
    return this.TiposEmpresa.find(
      Tipo => Number(Tipo.CodigoTipoEmpresa) === Number(CodigoTipoEmpresa)
    )?.NombreTipoEmpresa ?? 'Sin tipo asignado';
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
