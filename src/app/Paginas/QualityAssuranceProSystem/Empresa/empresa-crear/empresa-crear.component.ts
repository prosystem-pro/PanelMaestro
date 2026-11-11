import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Empresa } from '../.././../../Modelos/ModeloQualityAssuranceProSystem/Empresa';
import { TipoEmpresa } from '../../../../Modelos/ModeloQualityAssuranceProSystem/TipoEmpresa';
import { EmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/EmpresaServicio';
import { TipoEmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/TipoEmpresaServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

@Component({
  selector: 'app-empresa-crear-QualityAssuranceProSystem',
  imports: [CommonModule, FormsModule, SpinnerGlobalComponent],
  templateUrl: './empresa-crear.component.html',
  styleUrl: './empresa-crear.component.css'
})
export class EmpresaCrearQualityAssuranceProSystemComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();
  Spinner: boolean = false;
  TiposEmpresa: TipoEmpresa[] = [];
  CargandoTiposEmpresa = false;
  Datos: Empresa = {};

  constructor(
    private Servicio: EmpresaServicio,
    private TipoEmpresaServicio: TipoEmpresaServicio,
    private Alerta: AlertaServicio
  ) { }

  ngOnInit() {
    this.Vaciar();
    this.CargarTiposEmpresa();
  }

  CargarTiposEmpresa() {
    this.CargandoTiposEmpresa = true;
    this.TipoEmpresaServicio.Listado().subscribe({
      next: (Respuesta: any) => {
        this.TiposEmpresa = Array.isArray(Respuesta?.data) ? Respuesta.data : [];
        this.CargandoTiposEmpresa = false;
      },
      error: (error) => {
        this.CargandoTiposEmpresa = false;
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
    if (this.Datos.CodigoTipoEmpresa == null) {
      this.Alerta.MostrarAlerta('Seleccione un tipo de empresa.');
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
      CodigoTipoEmpresa: undefined,
      NombreEmpresa: '',
      Direccion: '',
      Eslogan: '',
      Telefono: '',
      Estatus: null,
        NIT: ''
    };
  }


}
