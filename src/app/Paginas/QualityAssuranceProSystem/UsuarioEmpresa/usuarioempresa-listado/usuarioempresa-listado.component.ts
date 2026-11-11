import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entorno } from '../../../../Entornos/Entorno';
import { Empresa } from '../../../../Modelos/ModeloQualityAssuranceProSystem/Empresa';
import { Usuario } from '../../../../Modelos/ModeloQualityAssuranceProSystem/Usuario';
import { UsuarioEmpresa } from '../../../../Modelos/ModeloQualityAssuranceProSystem/UsuarioEmpresa';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { EmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/EmpresaServicio';
import { UsuarioEmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/UsuarioEmpresaServicio';
import { UsuarioServicio } from '../../../../Servicios/QualityAssuranceProSystem/UsuarioServicio';
import { SidebarQualityAssuranceProSystemComponent } from '../../Sidebar/sidebar.component';
import { UsuarioEmpresaCrearQualityAssuranceProSystemComponent } from '../usuarioempresa-crear/usuarioempresa-crear.component';

type UsuarioEmpresaVista = UsuarioEmpresa & {
  NombreUsuario?: string;
  NombreEmpresa?: string;
};

declare var bootstrap: any;

@Component({
  selector: 'app-usuarioempresa-listado-QualityAssuranceProSystem',
  imports: [
    CommonModule,
    FormsModule,
    SidebarQualityAssuranceProSystemComponent,
    UsuarioEmpresaCrearQualityAssuranceProSystemComponent,
    SpinnerGlobalComponent
  ],
  templateUrl: './usuarioempresa-listado.component.html',
  styleUrl: './usuarioempresa-listado.component.css'
})
export class UsuarioEmpresaListadoQualityAssuranceProSystemComponent {
  NombreEmpresa = Entorno.NombreEmpresaQualityAssuranceProSystem;
  LogoEmpresa = Entorno.LogoQualityAssuranceProSystem;
  Usuarios: Usuario[] = [];
  Empresas: Empresa[] = [];
  Datos: UsuarioEmpresaVista[] = [];
  CodigoEditando: number | null = null;
  FiltroBuscador = '';
  Spinner = false;

  constructor(
    private Servicio: UsuarioEmpresaServicio,
    private UsuarioServicio: UsuarioServicio,
    private EmpresaServicio: EmpresaServicio,
    private router: Router,
    private Alerta: AlertaServicio
  ) {}

  ngOnInit() {
    this.CargarReferencias();
    this.Listado();
  }

  CargarReferencias() {
    this.UsuarioServicio.Listado().subscribe({
      next: (Respuesta: any) => {
        this.Usuarios = Array.isArray(Respuesta?.data) ? Respuesta.data : [];
        this.ActualizarEtiquetas();
      },
      error: (error) => this.MostrarError(error)
    });
    this.EmpresaServicio.Listado().subscribe({
      next: (Respuesta: any) => {
        this.Empresas = Array.isArray(Respuesta?.data) ? Respuesta.data : [];
        this.ActualizarEtiquetas();
      },
      error: (error) => this.MostrarError(error)
    });
  }

  Listado() {
    this.Spinner = true;
    this.Servicio.Listado().subscribe({
      next: (Respuesta: any) => {
        this.Datos = Array.isArray(Respuesta?.data) ? Respuesta.data : [];
        this.ActualizarEtiquetas();
        this.Spinner = false;
      },
      error: (error) => {
        this.Spinner = false;
        this.MostrarError(error);
      }
    });
  }

  private ActualizarEtiquetas() {
    this.Datos = this.Datos.map((Dato) => ({
      ...Dato,
      NombreUsuario: this.Usuarios.find(
        Usuario => Number(Usuario.CodigoUsuario) === Number(Dato.CodigoUsuario)
      )?.NombreUsuario ?? 'Usuario no encontrado',
      NombreEmpresa: this.Empresas.find(
        Empresa => Number(Empresa.CodigoEmpresa) === Number(Dato.CodigoEmpresa)
      )?.NombreEmpresa ?? 'Empresa no encontrada'
    }));
  }

  NombreDeUsuario(CodigoUsuario?: number): string {
    return this.Usuarios.find(
      Usuario => Number(Usuario.CodigoUsuario) === Number(CodigoUsuario)
    )?.NombreUsuario ?? 'Usuario no encontrado';
  }

  NombreDeEmpresa(CodigoEmpresa?: number): string {
    return this.Empresas.find(
      Empresa => Number(Empresa.CodigoEmpresa) === Number(CodigoEmpresa)
    )?.NombreEmpresa ?? 'Empresa no encontrada';
  }

  EsPrincipal(Valor: any): boolean {
    return Valor === true || Valor === 1 || Valor === '1' || Valor === 'true';
  }

  Buscador(): UsuarioEmpresaVista[] {
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
      return coincide(Dato.CodigoUsuarioEmpresa) ||
        coincide(Dato.NombreUsuario) ||
        coincide(Dato.NombreEmpresa) ||
        coincide(this.EsPrincipal(Dato.EsEmpresaPrincipal) ? 'principal' : 'no principal') ||
        coincide(estatusTexto);
    });
  }

  ActivarEdicion(Dato: UsuarioEmpresaVista) {
    this.CodigoEditando = Dato.CodigoUsuarioEmpresa!;
  }

  CancelarEdicion() {
    this.CodigoEditando = null;
    this.Listado();
  }

  Editar(Dato: UsuarioEmpresaVista) {
    if (Dato.CodigoUsuario == null || Dato.CodigoEmpresa == null) {
      this.Alerta.MostrarAlerta('Seleccione el usuario y la empresa.');
      return;
    }

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
        this.MostrarError(error);
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
            this.MostrarError(error);
          }
        });
      }
    });
  }

  Navegar(Ruta: string) {
    this.router.navigate([Ruta]);
  }

  Recargar() {
    this.Listado();
    const modal = bootstrap.Modal.getInstance(document.getElementById('CrearUsuarioEmpresaModal'));
    modal?.hide();
  }

  AbrirModalCrear() {
    const modal = new bootstrap.Modal(document.getElementById('CrearUsuarioEmpresaModal'));
    modal.show();
  }

  private MostrarError(error: any) {
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
}
