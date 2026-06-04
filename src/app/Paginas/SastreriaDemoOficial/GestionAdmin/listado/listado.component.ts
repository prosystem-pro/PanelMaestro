import { Component, ViewChild, ElementRef } from '@angular/core';
import { SpinnerGlobalComponent } from '../../../../Componentes/spinner-global/spinner-global.component';
import { SidebarSastreriaDemoOficialComponent } from '../../Sidebar/sidebar.component';
import { GestionSuperAdminServicio } from '../../../../Servicios/SastreriaDemoOficial/GestionAdmin-Servicio';
import { SystemBackupServicio } from '../../../../Servicios/SastreriaDemoOficial/System_Backup_Servicio';
import { AlertaServicio } from '../../../../Servicios/Alerta-Servicio';
import { Entorno } from '../../../../Entornos/Entorno';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado',
  imports: [CommonModule, FormsModule, SpinnerGlobalComponent, SidebarSastreriaDemoOficialComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoSastreriaDemoOficialComponent {
  @ViewChild('inputSQL') InputSQL!: ElementRef<HTMLInputElement>;
  ArchivoRestauracion: File | null = null;
  NombreEmpresa = Entorno.NombreEmpresaSastreriaDemoOficial;
  LogoEmpresa = Entorno.LogoSastreriaDemoOficial;
  Spinner = false;

  constructor(
    private Servicio: GestionSuperAdminServicio,
    private BackupServicio: SystemBackupServicio,
    private Alerta: AlertaServicio
  ) { }

  LimpiarBD(): void {

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

        this.Servicio.LimpiarBaseDatosReplicaCliente().subscribe({
          next: () => {
            this.Spinner = false;
            this.Alerta.MostrarExito('Base de datos limpiada correctamente.');
          },
          error: (error) => {
            const tipo = error?.error?.tipo;
            const mensaje = error?.error?.error?.message || error?.error?.message || 'Ocurrió un error inesperado';

            if (tipo === 'Alerta') {
              this.Alerta.MostrarAlerta(mensaje);
            } else {
              this.Alerta.MostrarError(error);
            }

            this.Spinner = false;
          }
        });

      });

    });

  }

  GenerarRespaldo(): void {

    this.Alerta.Confirmacion(
      '💾 Generar respaldo',
      '¿Deseas generar un respaldo completo de la base de datos?'
    ).then(confirmado => {

      if (!confirmado) return;
      this.Spinner = true;

      this.BackupServicio.RespaldoCompleto().subscribe({
        next: (respuesta: any) => {
          // 👇 SACAMOS LAS DOS COSAS QUE TE MANDA EL BACK POR SEPARADO
          const NombreArchivo = respuesta.nombreArchivo;
          const contenidoSQL = respuesta.contenidoSQL;

          // ✅ EL RESTO ES LO MISMO QUE TENÍAS, SOLO AGREGAS ESTA LÍNEA PARA CREAR EL ARCHIVO
          const blob = new Blob([contenidoSQL], { type: 'application/octet-stream' });

          const Url = window.URL.createObjectURL(blob);
          const Link = document.createElement('a');
          Link.href = Url;
          Link.download = NombreArchivo;
          Link.click();
          window.URL.revokeObjectURL(Url);

          this.Spinner = false;
          this.Alerta.MostrarExito(`Respaldo descargado: ${NombreArchivo}`);
        },
        error: (error) => {
          const tipo = error?.error?.tipo;
          const mensaje = error?.error?.error?.message || error?.error?.message || 'Ocurrió un error inesperado';

          if (tipo === 'Alerta') {
            this.Alerta.MostrarAlerta(mensaje);
          } else {
            this.Alerta.MostrarError(error);
          }
          this.Spinner = false;
        }
      });
    });
  }
  // NUEVO: Limpiar solo registros, mantiene tablas
  LimpiarSoloRegistrosTotal(): void {

    this.Alerta.Confirmacion(
      '⚠️ ACCIÓN EXTREMA',
      'Se borrarán TODOS los registros de la base de datos, pero se mantendrán las tablas. ¿Deseas continuar?'
    ).then(confirmado => {

      if (!confirmado) return;

      this.Alerta.SolicitarTexto(
        'CONFIRMACIÓN OBLIGATORIA',
        'Escribe LIMPIAR_TODO_REGISTROS para proceder',
        'LIMPIAR_TODO_REGISTROS'
      ).then(texto => {

        if (!texto) return;

        const valor = texto.trim().toUpperCase();

        if (valor !== 'LIMPIAR_TODO_REGISTROS') {
          this.Alerta.MostrarError({
            error: { message: 'Texto incorrecto. Operación cancelada.' }
          });
          return;
        }

        this.Spinner = true;

        this.Servicio.LimpiarSoloRegistrosTotal().subscribe({
          next: () => {
            this.Spinner = false;
            this.Alerta.MostrarExito('✅ Todos los registros eliminados, estructura conservada.');
          },
          error: (error) => {
            const tipo = error?.error?.tipo;
            const mensaje = error?.error?.error?.message || error?.error?.message || 'Ocurrió un error inesperado';

            if (tipo === 'Alerta') {
              this.Alerta.MostrarAlerta(mensaje);
            } else {
              this.Alerta.MostrarError(error);
            }

            this.Spinner = false;
          }
        });

      });

    });

  }

  // NUEVO: Vaciar totalmente la BD (elimina tablas)
  VaciarTotalBaseDatos(): void {

    this.Alerta.Confirmacion(
      '🚨 ACCIÓN DESTRUCTIVA TOTAL',
      '¡ELIMINARÁS TODAS LAS TABLAS Y DATOS! La base quedará vacía. ¿Estás SEGURO?'
    ).then(confirmado => {

      if (!confirmado) return;

      this.Alerta.SolicitarTexto(
        'CONFIRMACIÓN FINAL MÁXIMA',
        'Escribe VACIAR_TOTALMENTE_BD para eliminar todo',
        'VACIAR_TOTALMENTE_BD'
      ).then(texto => {

        if (!texto) return;

        const valor = texto.trim().toUpperCase();

        if (valor !== 'VACIAR_TOTALMENTE_BD') {
          this.Alerta.MostrarError({
            error: { message: 'Texto incorrecto. Operación cancelada.' }
          });
          return;
        }

        this.Spinner = true;

        this.Servicio.VaciarTotalBaseDatos().subscribe({
          next: () => {
            this.Spinner = false;
            this.Alerta.MostrarExito('💥 Base de datos totalmente vaciada. Todas las tablas eliminadas.');
          },
          error: (error) => {
            const tipo = error?.error?.tipo;
            const mensaje = error?.error?.error?.message || error?.error?.message || 'Ocurrió un error inesperado';

            if (tipo === 'Alerta') {
              this.Alerta.MostrarAlerta(mensaje);
            } else {
              this.Alerta.MostrarError(error);
            }

            this.Spinner = false;
          }
        });

      });

    });

  }


  AbrirSelectorArchivo(): void {
    this.InputSQL.nativeElement.click();
  }
  SeleccionarArchivo(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.ArchivoRestauracion = input.files[0];
    }
  }

  RestaurarRespaldo(): void {

    if (!this.ArchivoRestauracion) {
      this.Alerta.MostrarAlerta('Debes seleccionar un archivo .sql antes de restaurar.');
      return;
    }

    this.Alerta.Confirmacion(
      '⚠️ Restaurar base de datos',
      'Esto sobreescribirá los datos actuales con el contenido del archivo. ¿Deseas continuar?'
    ).then(confirmado => {

      if (!confirmado) return;

      this.Alerta.SolicitarTexto(
        'Confirmación final',
        'Escribe RESTAURAR para continuar',
        'RESTAURAR'
      ).then(texto => {

        if (!texto) return;

        if (texto.trim().toUpperCase() !== 'RESTAURAR') {
          this.Alerta.MostrarError({
            error: { message: 'Texto incorrecto. Operación cancelada.' }
          });
          return;
        }

        this.Spinner = true;

        this.BackupServicio.RestaurarRespaldoCompleto(this.ArchivoRestauracion!).subscribe({
          next: () => {
            this.Spinner = false;
            this.ArchivoRestauracion = null;
            this.Alerta.MostrarExito('Base de datos restaurada correctamente.');
          },
          error: (error) => {
            const tipo = error?.error?.tipo;
            if (tipo === 'Alerta') {
              this.Alerta.MostrarAlerta(error?.error?.message);
            } else {
              this.Alerta.MostrarError(error);
            }
            this.Spinner = false;
          }
        });

      });

    });

  }
  // ✅ NUEVO: Respaldo por Mes
  GenerarRespaldoPorMes(): void {
    // Primero pedimos Año
    this.Alerta.SolicitarTexto(
      '📅 Respaldo Mensual',
      'Ingresa el Año a respaldar (ej: 2025)',
      ''
    ).then((anioTexto) => {
      if (!anioTexto) return;

      const anio = parseInt(anioTexto.trim());
      if (isNaN(anio)) {
        this.Alerta.MostrarError({ error: { message: 'Año inválido' } });
        return;
      }

      // Luego pedimos Mes
      this.Alerta.SolicitarTexto(
        '📅 Respaldo Mensual',
        'Ingresa el Mes a respaldar (1 al 12)',
        ''
      ).then((mesTexto) => {
        if (!mesTexto) return;

        const mes = parseInt(mesTexto.trim());
        if (isNaN(mes) || mes < 1 || mes > 12) {
          this.Alerta.MostrarError({ error: { message: 'Mes inválido (debe ser 1 - 12)' } });
          return;
        }

        // Confirmación final
        this.Alerta.Confirmacion(
          '💾 Confirmar Respaldo',
          `Se generará respaldo con TODOS los maestros y movimientos de: ${mes}/${anio}. ¿Continuar?`
        ).then(confirmado => {
          if (!confirmado) return;

          this.Spinner = true;
          this.BackupServicio.RespaldoPorMes(anio, mes).subscribe({
            next: (resultado: any) => {
              const NombreArchivo = resultado.nombreArchivo;
              const contenidoSQL = resultado.contenidoSQL;

              const blob = new Blob([contenidoSQL], { type: 'application/octet-stream' });
              const Url = window.URL.createObjectURL(blob);
              const Link = document.createElement('a');
              Link.href = Url;
              Link.download = NombreArchivo;
              Link.click();
              window.URL.revokeObjectURL(Url);

              this.Spinner = false;
              this.Alerta.MostrarExito(`✅ Respaldo mensual generado: ${NombreArchivo}`);
            },
            error: (error) => {
              const mensaje = error?.error?.error?.message || error?.error?.message || 'Error al generar respaldo mensual';
              this.Alerta.MostrarError({ error: { message: mensaje } });
              this.Spinner = false;
            }
          });
        });
      });
    });
  }

  // ✅ NUEVO: Borrar por Mes
  EliminarDatosPorMes(): void {
    // Primero pedimos Año
    this.Alerta.SolicitarTexto(
      '🗑️ Eliminar Datos Mensuales',
      'Ingresa el Año a ELIMINAR (ej: 2025)',
      ''
    ).then((anioTexto) => {
      if (!anioTexto) return;

      const anio = parseInt(anioTexto.trim());
      if (isNaN(anio)) {
        this.Alerta.MostrarError({ error: { message: 'Año inválido' } });
        return;
      }

      // Luego pedimos Mes
      this.Alerta.SolicitarTexto(
        '🗑️ Eliminar Datos Mensuales',
        'Ingresa el Mes a ELIMINAR (1 al 12)',
        ''
      ).then((mesTexto) => {
        if (!mesTexto) return;

        const mes = parseInt(mesTexto.trim());
        if (isNaN(mes) || mes < 1 || mes > 12) {
          this.Alerta.MostrarError({ error: { message: 'Mes inválido (debe ser 1 - 12)' } });
          return;
        }

        // Advertencia de peligro
        this.Alerta.Confirmacion(
          '⚠️ ¡PELIGRO! ACCIÓN IRREVERSIBLE',
          `Vas a BORRAR TODOS los movimientos del mes ${mes}/${anio}. Asegúrate de haber hecho el respaldo antes. ¿Deseas continuar?`
        ).then(confirmado1 => {
          if (!confirmado1) return;

          // Confirmación con texto obligatorio (igual a tus otras funciones)
          this.Alerta.SolicitarTexto(
            'CONFIRMACIÓN FINAL',
            `Escribe BORRAR_MES_${mes}_${anio} para proceder`,
            `BORRAR_MES_${mes}_${anio}`
          ).then(texto => {
            if (!texto) return;
            const valor = texto.trim().toUpperCase();

            if (valor !== `BORRAR_MES_${mes}_${anio}`) {
              this.Alerta.MostrarError({ error: { message: 'Texto incorrecto. Operación cancelada.' } });
              return;
            }

            this.Spinner = true;
            this.BackupServicio.BorrarDatosPorMes(anio, mes).subscribe({
              next: (res: any) => {
                this.Spinner = false;
                this.Alerta.MostrarExito(`✅ ${res.mensaje}`);
              },
              error: (error) => {
                const mensaje = error?.error?.error?.message || error?.error?.message || 'Error al borrar datos';
                this.Alerta.MostrarError({ error: { message: mensaje } });
                this.Spinner = false;
              }
            });
          });
        });
      });
    });
  }
}
