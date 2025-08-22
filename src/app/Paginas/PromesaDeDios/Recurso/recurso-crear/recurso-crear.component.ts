import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recurso } from '../.././../../Modelos/ModeloPromesaDeDios/Recurso';
import { RecursoServicio } from '../../../../Servicios/PromesaDeDios/RecursoServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { CommonModule } from '@angular/common';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

@Component({
  selector: 'app-recurso-crear-PromesaDeDios',
  imports: [FormsModule, CommonModule, SpinnerGlobalComponent],
  templateUrl: './recurso-crear.component.html',
  styleUrl: './recurso-crear.component.css'
})
export class RecursoCrearPromesaDeDiosComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();

  Spinner: boolean = false;
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
    this.Spinner = true;
    this.Servicio.Crear(this.Datos).subscribe({
      next: (Respuesta) => {
        this.Spinner = false;
        if (Respuesta?.tipo === 'Éxito') {
          this.Alerta.MostrarExito(Respuesta.message);
        }
        this.ObjetoCreado.emit();
        this.Vaciar();
        this.ObtenerTablasPendientes(); // Recargar después de crear
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
      NombreRecurso: '',
      Estatus: null
    };
  }


  ObtenerTablasPendientes() {
    this.Spinner = true;
    // Obtener recursos ya creados
    this.Servicio.Listado().subscribe({
      next: (Respuesta: any) => {

        const nombresRecursos = Respuesta.data.map((r: any) => r.NombreRecurso);
        // Obtener tablas desde las rutas
        this.Servicio.ObtenerPermisosDisponibles().subscribe({
          next: (tablasDesdeRutas: any[]) => {
            const nombresTablas = tablasDesdeRutas.map(t => t.Tabla);
            // Filtrar las que aún no están creadas
            this.TablasPendientes = nombresTablas.filter(nombre => !nombresRecursos.includes(nombre));
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

}
