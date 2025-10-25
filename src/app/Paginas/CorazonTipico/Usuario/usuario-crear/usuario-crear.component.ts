import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rol } from '../.././../../Modelos/ModeloCorazonTipico/Rol';
import { Empresa } from '../.././../../Modelos/ModeloCorazonTipico/Empresa';
import { UsuarioServicio } from '../../../../Servicios/CorazonTipico/UsuarioServicio';
import { EmpresaServicio } from '../../../../Servicios/CorazonTipico/EmpresaServicio';
import { RolServicio } from '../../../../Servicios/CorazonTipico/RolServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { Usuario } from '../../../../Modelos/ModeloCorazonTipico/Usuario';
import { CommonModule } from '@angular/common';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

@Component({
  selector: 'app-usuario-crear-CorazonTipico',
  imports: [FormsModule, CommonModule, SpinnerGlobalComponent],
  templateUrl: './usuario-crear.component.html',
  styleUrl: './usuario-crear.component.css'
})
export class UsuarioCrearCorazonTipicoComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();
  Spinner: boolean = false;
  Datos: Usuario & { Clave?: string, NombreRol?: string, NombreEmpresa?: string } = {};
  Empresas: Empresa[] = [];
  Roles: Rol[] = [];

  constructor(private Servicio: UsuarioServicio,
    private Alerta: AlertaServicio,
    private EmpresaServicio: EmpresaServicio,
    private RolServicio: RolServicio
  ) { }

  ngOnInit() {
    this.Vaciar();
    this.CargarEmpresas();
    this.CargarRoles();
  }

  CargarRoles() {
    this.Spinner = true;
    this.RolServicio.Listado().subscribe({
      next: (Repuesta) => {
        this.Roles = Repuesta.data;
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

  CargarEmpresas() {
    this.EmpresaServicio.Listado().subscribe({
      next: (Respuesta) => {
        this.Empresas = Respuesta.data;
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

  Crear() {
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

  Vaciar() {
    this.Datos = {
      NombreUsuario: '',
      Clave: '',
      Estatus: null
    };
  }

}
