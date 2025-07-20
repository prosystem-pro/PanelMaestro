import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rol } from '../.././../../Modelos/ModeloCafeJuanAna/Rol';
import { RolServicio } from '../../../../Servicios/CafeJuanAna/RolServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';


@Component({
  selector: 'app-rol-crear',
  imports: [FormsModule],
  templateUrl: './rol-crear.component.html',
  styleUrl: './rol-crear.component.css'
})
export class RolCrearCafeJuanAnaComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();

  Datos: Rol = {};

  constructor(private Servicio: RolServicio, private Alerta: AlertaServicio) { }

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
      NombreRol: '',
      Estatus: null
    };
  }

}
