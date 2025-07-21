import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recurso } from '../.././../../Modelos/ModeloCafeJuanAna/Recurso';
import { RecursoServicio } from '../../../../Servicios/CafeJuanAna/RecursoServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recurso-crear-CafeJuanAna',
  imports: [FormsModule, CommonModule],
  templateUrl: './recurso-crear.component.html',
  styleUrl: './recurso-crear.component.css'
})
export class RecursoCrearCafeJuanAnaComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();

  Datos: Recurso = {
    NombreRecurso: '',
    Estatus: null
  };

  TablasPendientes: string[] = [];

  constructor(private Servicio: RecursoServicio, private Alerta: AlertaServicio) { }

  ngOnInit() {
 this.ObtenerTablasPendientes();
  }
   Crear() {
    this.Servicio.Crear(this.Datos).subscribe({
      next: () => {
        this.Alerta.MostrarExito('El registro se creó correctamente.');
        this.ObjetoCreado.emit();
        this.Vaciar();
        this.ObtenerTablasPendientes(); // Recargar después de crear
      },
      error: (error) => {
        this.Alerta.MostrarError(error);
      }
    });
  }

Vaciar() {
  this.Datos = {
    NombreRecurso: '',
    Estatus: null
  };
}


ObtenerTablasPendientes() {
  // Obtener recursos ya creados
  this.Servicio.Listado().subscribe({
    next: (recursosCreados: Recurso[]) => {
      const nombresRecursos = recursosCreados.map(r => r.NombreRecurso);

      // Obtener tablas desde las rutas
      this.Servicio.ObtenerPermisosDisponibles().subscribe({
        next: (tablasDesdeRutas: any[]) => {
          const nombresTablas = tablasDesdeRutas.map(t => t.Tabla);

          // Filtrar las que aún no están creadas
          this.TablasPendientes = nombresTablas.filter(nombre => !nombresRecursos.includes(nombre));

          // DEBUG: Mostrar en consola lo que se obtuvo
          console.log('🟡 Tablas definidas desde rutas:', nombresTablas);
          console.log('🔵 Recursos ya creados:', nombresRecursos);
          console.log('🟢 Tablas pendientes por crear:', this.TablasPendientes);
        },
        error: (err) => {
          console.error('Error al obtener permisos disponibles:', err);
        }
      });
    },
    error: (err) => {
      console.error('Error al obtener recursos existentes:', err);
    }
  });
}

}
