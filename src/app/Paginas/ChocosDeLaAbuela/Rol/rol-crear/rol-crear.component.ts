import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rol } from '../.././../../Modelos/ModeloChocosDeLaAbuela/Rol';
import { RolServicio } from '../../../../Servicios/ChocosDeLaAbuela/RolServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';


@Component({
  selector: 'app-rol-crear-ChocosDeLaAbuela',
  imports: [FormsModule, SpinnerGlobalComponent],
  templateUrl: './rol-crear.component.html',
  styleUrl: './rol-crear.component.css'
})
export class RolCrearChocosDeLaAbuelaComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();
  Spinner: boolean = false;
  Datos: Rol = {};

  constructor(private Servicio: RolServicio, private Alerta: AlertaServicio) { }

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
      NombreRol: '',
      Estatus: null
    };
  }

}
