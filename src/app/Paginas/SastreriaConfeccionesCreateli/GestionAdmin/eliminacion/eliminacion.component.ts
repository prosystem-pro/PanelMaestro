import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionSuperAdminServicio } from '../../../../Servicios/SastreriaConfeccionesCreateli/GestionAdmin-Servicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';
import { SidebarSastreriaConfeccionesCreateliComponent } from '../../Sidebar/sidebar.component';
import { Entorno } from '../../../../Entornos/Entorno';


@Component({
  selector: 'app-eliminacion',
  imports: [SpinnerGlobalComponent, SidebarSastreriaConfeccionesCreateliComponent],
  templateUrl: './eliminacion.component.html',
  styleUrl: './eliminacion.component.css'
})
export class EliminacionSastreriaConfeccionesCreateliComponent {
  NombreEmpresa = Entorno.NombreEmpresaSastreriaConfeccionesCreateli;
  LogoEmpresa = Entorno.LogoSastreriaConfeccionesCreateli;
  Spinner: boolean = false;

  constructor(
    private Servicio: GestionSuperAdminServicio,
    private Alerta: AlertaServicio
  ) { }

  LimpiarBD() {

    this.Alerta.Confirmacion(
      '⚠️ Acción peligrosa',
      'Esto eliminará datos de pruebas en la base de datos. ¿Deseas continuar?'
    ).then(confirmado => {

      if (!confirmado) return;

      this.Alerta.SolicitarTexto(
        'Confirmación final',
        'Escribe LIMPIAR para continuar',
        'LIMPIAR'
      ).then(texto => {

        if (!texto) return;

        const valor = texto.trim().toUpperCase();

        if (valor !== 'LIMPIAR') {
          this.Alerta.MostrarError({
            error: { message: 'Texto incorrecto. Operación cancelada.' }
          });
          return;
        }

        this.Spinner = true;

        this.Servicio.LimpiarBaseDatosPruebas().subscribe({
          next: () => {
            this.Spinner = false;
            this.Alerta.MostrarExito('Base de datos limpiada correctamente.');
          },
          error: (error) => {
            this.Spinner = false;

            const mensaje =
              error?.error?.message || 'Error inesperado';

            this.Alerta.MostrarError({ error: { message: mensaje } });
          }
        });

      });

    });
  }
}
