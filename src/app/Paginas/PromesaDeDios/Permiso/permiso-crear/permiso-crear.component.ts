import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Permiso } from '../.././../../Modelos/ModeloPromesaDeDios/Permiso';
import { PermisoServicio } from '../../../../Servicios/PromesaDeDios/PermisoServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-permiso-crear-PromesaDeDios',
  imports: [FormsModule, CommonModule],
  templateUrl: './permiso-crear.component.html',
  styleUrl: './permiso-crear.component.css'
})
export class PermisoCrearPromesaDeDiosComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();

  Datos: Permiso = {};
  PermisosPendientes: string[] = [];

  constructor(private Servicio: PermisoServicio, private Alerta: AlertaServicio) { }
  ngOnInit() {
    this.Vaciar();
    this.ObtenerPermisosPendientes();
  }

  ObtenerPermisosPendientes() {
    this.Servicio.ObtenerResumenPermisos().subscribe({
      next: (Respuesta) => {
        const permisosDesdeRutas: string[] = Respuesta.data.permisos;

        this.Servicio.Listado().subscribe({
          next: (Respuesta: any) => {
            const permisosCreados: string[] = Respuesta.data.map((p: any) => p.NombrePermiso);
            this.PermisosPendientes = permisosDesdeRutas.filter(p => !permisosCreados.includes(p));
          },
          error: (err) => console.error('Error al obtener los registros creados:', err)
        });
      },
      error: (err) => console.error('Error al obtener registros desde rutas:', err)
    });
  }

  Crear() {
    this.Servicio.Crear(this.Datos).subscribe({
      next: () => {
        this.Alerta.MostrarExito('El registro se creó correctamente.');
        this.ObjetoCreado.emit();
        this.Vaciar();
        this.ObtenerPermisosPendientes();
      },
      error: (error) => {
        this.Alerta.MostrarError(error);
      }
    });
  }

  Vaciar() {
    this.Datos = {
      NombrePermiso: '',
      Estatus: null
    };
  }
}
