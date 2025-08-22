import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empresa } from '../.././../../Modelos/ModeloPromesaDeDios/Empresa';
import { EmpresaServicio } from '../../../../Servicios/PromesaDeDios/EmpresaServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

@Component({
  selector: 'app-empresa-crear-PromesaDeDios',
  imports: [FormsModule, SpinnerGlobalComponent],
  templateUrl: './empresa-crear.component.html',
  styleUrl: './empresa-crear.component.css'
})
export class EmpresaCrearPromesaDeDiosComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();
  Spinner: boolean = false;
  Datos: Empresa = {};

  constructor(private Servicio: EmpresaServicio, private Alerta: AlertaServicio) { }

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
      NombreEmpresa: '',
      Direccion: '',
      Eslogan: '',
      Celular: '',
      Estatus: null
    };
  }


}
