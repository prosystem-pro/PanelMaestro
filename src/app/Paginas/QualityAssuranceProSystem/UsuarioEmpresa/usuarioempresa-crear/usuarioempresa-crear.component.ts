import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empresa } from '../../../../Modelos/ModeloQualityAssuranceProSystem/Empresa';
import { Usuario } from '../../../../Modelos/ModeloQualityAssuranceProSystem/Usuario';
import { UsuarioEmpresa } from '../../../../Modelos/ModeloQualityAssuranceProSystem/UsuarioEmpresa';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { EmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/EmpresaServicio';
import { UsuarioEmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/UsuarioEmpresaServicio';
import { UsuarioServicio } from '../../../../Servicios/QualityAssuranceProSystem/UsuarioServicio';

@Component({
  selector: 'app-usuarioempresa-crear-QualityAssuranceProSystem',
  imports: [CommonModule, FormsModule, SpinnerGlobalComponent],
  templateUrl: './usuarioempresa-crear.component.html'
})
export class UsuarioEmpresaCrearQualityAssuranceProSystemComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();
  Spinner = false;
  Usuarios: Usuario[] = [];
  Empresas: Empresa[] = [];
  Datos: UsuarioEmpresa = {};

  constructor(
    private Servicio: UsuarioEmpresaServicio,
    private UsuarioServicio: UsuarioServicio,
    private EmpresaServicio: EmpresaServicio,
    private Alerta: AlertaServicio
  ) {}

  ngOnInit() {
    this.Vaciar();
    this.CargarUsuarios();
    this.CargarEmpresas();
  }

  CargarUsuarios() {
    this.UsuarioServicio.Listado().subscribe({
      next: (Respuesta: any) => {
        this.Usuarios = Array.isArray(Respuesta?.data) ? Respuesta.data : [];
      },
      error: (error) => this.MostrarError(error)
    });
  }

  CargarEmpresas() {
    this.EmpresaServicio.Listado().subscribe({
      next: (Respuesta: any) => {
        this.Empresas = Array.isArray(Respuesta?.data) ? Respuesta.data : [];
      },
      error: (error) => this.MostrarError(error)
    });
  }

  Crear() {
    if (this.Datos.CodigoUsuario == null || this.Datos.CodigoEmpresa == null) {
      this.Alerta.MostrarAlerta('Seleccione el usuario y la empresa.');
      return;
    }

    this.Spinner = true;
    this.Servicio.Crear(this.Datos).subscribe({
      next: (Respuesta) => {
        if (Respuesta?.tipo === 'Éxito') {
          this.Alerta.MostrarExito(Respuesta.message);
        }
        this.Spinner = false;
        this.ObjetoCreado.emit();
        this.Vaciar();
      },
      error: (error) => {
        this.Spinner = false;
        this.MostrarError(error);
      }
    });
  }

  Vaciar() {
    this.Datos = {
      CodigoUsuario: undefined,
      CodigoEmpresa: undefined,
      EsEmpresaPrincipal: false,
      Estatus: null
    };
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
