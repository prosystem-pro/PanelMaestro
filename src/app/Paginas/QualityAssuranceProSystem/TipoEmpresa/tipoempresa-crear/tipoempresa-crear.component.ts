import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoEmpresa } from '../../../../Modelos/ModeloQualityAssuranceProSystem/TipoEmpresa';
import { TipoEmpresaServicio } from '../../../../Servicios/QualityAssuranceProSystem/TipoEmpresaServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

@Component({
  selector: 'app-tipoempresa-crear-QualityAssuranceProSystem',
  imports: [FormsModule, SpinnerGlobalComponent],
  templateUrl: './tipoempresa-crear.component.html'
})
export class TipoEmpresaCrearQualityAssuranceProSystemComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();
  Spinner = false;
  Datos: TipoEmpresa = {};

  constructor(private Servicio: TipoEmpresaServicio, private Alerta: AlertaServicio) {}

  ngOnInit() {
    this.Vaciar();
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
      NombreTipoEmpresa: '',
      Estatus: null
    };
  }
}
