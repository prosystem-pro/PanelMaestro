import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empresa } from '../.././../../Modelos/ModeloRestauranteKaski/Empresa';
import { EmpresaServicio } from '../../../../Servicios/RestauranteKaski/EmpresaServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';

@Component({
  selector: 'app-empresa-crear-RestauranteKaski',
  imports: [FormsModule],
  templateUrl: './empresa-crear.component.html',
  styleUrl: './empresa-crear.component.css'
})
export class EmpresaCrearRestauranteKaskiComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();

  Datos: Empresa = {};

  constructor(private Servicio: EmpresaServicio, private Alerta: AlertaServicio) { }

  ngOnInit() {
    this.Vaciar();
  }
  Crear() {
    this.Servicio.Crear(this.Datos).subscribe({
      next: (respuesta) => {
        this.Alerta.MostrarExito('El registro se creó correctamente.');
        this.ObjetoCreado.emit();
        this.Vaciar();
      },
      error: (error) => {
        this.Alerta.MostrarError(error);
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
