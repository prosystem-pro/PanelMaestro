import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Permiso } from '../.././../../Modelos/ModeloPromesaDeDios/Permiso';
import { PermisoServicio } from '../../../../Servicios/PromesaDeDios/PermisoServicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { CommonModule } from '@angular/common';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';

@Component({
  selector: 'app-permiso-crear-PromesaDeDios',
  imports: [FormsModule, CommonModule, SpinnerGlobalComponent],
  templateUrl: './permiso-crear.component.html',
  styleUrl: './permiso-crear.component.css'
})
export class PermisoCrearPromesaDeDiosComponent {
  @Output() ObjetoCreado = new EventEmitter<void>();
  Spinner: boolean = false;
  Datos: Permiso = {};
  PermisosPendientes: string[] = [];

  constructor(private Servicio: PermisoServicio, private Alerta: AlertaServicio) { }
  ngOnInit() {
    this.Vaciar();
    this.ObtenerPermisosPendientes();
  }

  ObtenerPermisosPendientes() {
    this.Spinner = true;
    this.Servicio.ObtenerResumenPermisos().subscribe({
      next: (Respuesta) => {
        const permisosDesdeRutas: string[] = Respuesta.data.permisos;

        this.Servicio.Listado().subscribe({
          next: (Respuesta: any) => {
            const permisosCreados: string[] = Respuesta.data.map((p: any) => p.NombrePermiso);
            this.PermisosPendientes = permisosDesdeRutas.filter(p => !permisosCreados.includes(p));
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

  Crear() {
    this.Spinner = true;
    this.Servicio.Crear(this.Datos).subscribe({
      next: (Respuesta) => {
        if (Respuesta?.tipo === 'Éxito') {
          this.Alerta.MostrarExito(Respuesta.message);
        }

        this.ObjetoCreado.emit();
        this.Vaciar();
        this.ObtenerPermisosPendientes();
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

  Vaciar() {
    this.Datos = {
      NombrePermiso: '',
      Estatus: null
    };
  }
}
