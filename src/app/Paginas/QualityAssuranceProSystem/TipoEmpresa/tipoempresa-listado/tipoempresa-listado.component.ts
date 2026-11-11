import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Entorno } from '../../../../Entornos/Entorno';
import { TipoEmpresa } from '../../../../Modelos/ModeloQualityAssuranceProSystem/TipoEmpresa';
import { TipoEmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/TipoEmpresaServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';
import { SidebarQualityAssuranceProSystemComponent } from '../../Sidebar/sidebar.component';
import { TipoEmpresaCrearQualityAssuranceProSystemComponent } from '../tipoempresa-crear/tipoempresa-crear.component';

declare var bootstrap: any;

@Component({
  selector: 'app-tipoempresa-listado-QualityAssuranceProSystem',
  imports: [
    FormsModule,
    CommonModule,
    SidebarQualityAssuranceProSystemComponent,
    TipoEmpresaCrearQualityAssuranceProSystemComponent,
    SpinnerGlobalComponent
  ],
  templateUrl: './tipoempresa-listado.component.html',
  styleUrl: './tipoempresa-listado.component.css'
})
export class TipoEmpresaListadoQualityAssuranceProSystemComponent {
  Spinner = false;
  NombreEmpresa = Entorno.NombreEmpresaQualityAssuranceProSystem;
  LogoEmpresa = Entorno.LogoQualityAssuranceProSystem;
  Datos: TipoEmpresa[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador = '';

  constructor(
    private Servicio: TipoEmpresaServicio,
    private router: Router,
    private Alerta: AlertaServicio
  ) {}

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

  Buscador(): TipoEmpresa[] {
    const texto = this.FiltroBuscador.toLowerCase();
    const textoSinEspacio = texto.trim();
    const esBusquedaExacta = texto.endsWith(' ');

    const coincide = (campo: string | number | undefined | null) => {
      const valor = String(campo ?? '').toLowerCase();
      return esBusquedaExacta ? valor === textoSinEspacio : valor.includes(textoSinEspacio);
    };

    return this.Datos.filter((Dato) => {
      const estatusTexto =
        Dato.Estatus === 1 || Dato.Estatus === '1' ? 'activo' :
          Dato.Estatus === 2 || Dato.Estatus === '2' ? 'inactivo' :
            Dato.Estatus === 3 || Dato.Estatus === '3' ? 'eliminado' : '';

      return coincide(Dato.NombreTipoEmpresa) || coincide(estatusTexto);
    });
  }

  ActivarEdicion(Dato: TipoEmpresa) {
    this.CodigoEditando = Dato.CodigoTipoEmpresa!;
  }

  CancelarEdicion() {
    this.CodigoEditando = null;
    this.Listado();
  }

  Editar(Dato: TipoEmpresa) {
    this.Spinner = true;
    this.Servicio.Editar(Dato).subscribe({
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
    ).then((confirmado) => {
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

  Recargar() {
    this.Listado();
    const modal = bootstrap.Modal.getInstance(document.getElementById('CrearTipoEmpresaModal'));
    modal?.hide();
  }

  AbrirModalCrear() {
    const modal = new bootstrap.Modal(document.getElementById('CrearTipoEmpresaModal'));
    modal.show();
  }
}
