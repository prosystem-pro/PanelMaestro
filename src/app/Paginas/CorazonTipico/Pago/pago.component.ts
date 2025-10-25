import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PagoServicioCorazonTipico } from '../../../Servicios/CorazonTipico/PagoServicio';
import { HttpClient } from '@angular/common/http';
import { Entorno } from '../../../Entornos/Entorno';
import { CommonModule } from '@angular/common';
import { AlertaServicio } from '../../../Servicios/Alerta-Servicio';
import { EmpresaServicio } from '../../../Servicios/CorazonTipico/EmpresaServicio';
import { SidebarCorazonTipicoComponent } from '../Sidebar/sidebar.component';
import { SpinnerGlobalComponent } from '../../../Componentes/spinner-global/spinner-global.component';

@Component({
  selector: 'app-pago-CorazonTipico',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, SidebarCorazonTipicoComponent, SpinnerGlobalComponent],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoCorazonTipicoComponent implements OnInit {

  Spinner: boolean = false;
  LogoEmpresa = Entorno.LogoCorazonTipico;
  Empresa = Entorno.NombreEmpresaCorazonTipico;
  @ViewChild('InputComprobante') InputComprobante!: ElementRef<HTMLInputElement>;
  ArchivoComprobanteTemporal: File | null = null;
  CodigoPagoTemporal: number | null = null;
  AnioSeleccionado: number = new Date().getFullYear();
  Datos: any[] = [];
  Formulario!: FormGroup;
  Editando: boolean = false;
  private NombreEmpresa = `${Entorno.NombreEmpresaCorazonTipico}`;
  private Url = `${Entorno.ApiUrlCorazonTipico}`;

  constructor(
    private pagoServicio: PagoServicioCorazonTipico,
    private fb: FormBuilder,
    private EmpresaServicio: EmpresaServicio,
    private Alerta: AlertaServicio,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.InicializarFormulario();
    this.CargarPagos();
  }

  InicializarFormulario(): void {
    this.Formulario = this.fb.group({
      CodigoPago: [null],
      CodigoEmpresa: [8],
      FechaDeposito: [null],
      FechaVencimientoPago: [null],
      Monto: [null],
      NumeroBoleta: [''],
      UrlComprobante: [''],
      Observaciones: [''],
      Estatus: [1],
    });
  }

  CargarPagos(): void {
    this.Spinner = true;
    this.pagoServicio.Listado(this.AnioSeleccionado).subscribe({
      next: (Respuesta) => {
        this.Datos = Respuesta.data;
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
      },
    });
  }

  // Guardar(): void {
  //   const datos = this.Formulario.value;

  //   if (!datos.CodigoPago && this.CodigoPagoTemporal) {
  //     datos.CodigoPago = this.CodigoPagoTemporal;
  //   }

  //   const EsEdicion = this.Editando || datos.CodigoPago;

  //   if (EsEdicion) {
  //     this.pagoServicio.Editar(datos).subscribe(() => {
  //       this.CargarPagos();
  //       this.Cancelar();
  //       this.CodigoPagoTemporal = null;
  //     });
  //   } else {
  //     this.pagoServicio.Crear(datos).subscribe(() => {
  //       this.CargarPagos();
  //       this.Formulario.reset({ CodigoEmpresa: 8, Estatus: 1 });
  //       this.CodigoPagoTemporal = null;
  //     });
  //   }
  // }

  Editar(pago: any): void {
    this.Formulario.patchValue(pago);
    this.Editando = true;
  }

  Eliminar(codigo: number) {
    this.Alerta.Confirmacion(
      '¿Seguro que deseas eliminar este pago?',
      'Esta acción eliminará el registro.'
    ).then(confirmado => {
      if (confirmado) {
        this.Spinner = true;
        this.pagoServicio.Eliminar(codigo).subscribe({
          next: (Respuesta) => {
            this.CargarPagos();

            this.Spinner = false;

            if (Respuesta?.tipo === 'Éxito') {
              this.Alerta.MostrarExito(Respuesta.message);
            }
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
    });
  }


  Cancelar(): void {
    this.Editando = false;
    this.Formulario.reset({ CodigoEmpresa: 8, Estatus: 1 });
  }

  SubirComprobanteFormulario(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    this.ArchivoComprobanteTemporal = input.files[0];

  }

  Guardar(): void {
    this.Spinner = true;
    if (this.ArchivoComprobanteTemporal) {
      const NombreEmpresa = (this.NombreEmpresa ?? 'Promesa_De_Dios').replace(/_/g, '');

      this.EmpresaServicio.ConseguirPrimeraEmpresa().subscribe({
        next: (empresa) => {
          if (!empresa) {
            this.Alerta.MostrarAlerta('No se encontró ninguna empresa');
            this.Spinner = false;
            return;
          }

          const formData = new FormData();
          formData.append('Imagen', this.ArchivoComprobanteTemporal!);
          formData.append('CarpetaPrincipal', NombreEmpresa);
          formData.append('SubCarpeta', 'Pago');
          formData.append('CodigoVinculado', empresa.CodigoEmpresa.toString());
          formData.append('CampoVinculado', 'CodigoEmpresa');
          formData.append('NombreCampoImagen', 'UrlComprobante');

          const CodigoPago = this.Formulario.value.CodigoPago;
          if (CodigoPago) {
            formData.append('CodigoPropio', CodigoPago.toString());
            formData.append('CampoPropio', 'CodigoPago');
          }
          const entries: any = {};
          formData.forEach((value, key) => {
            entries[key] = value;
          });

          this.pagoServicio.SubirImagen(formData).subscribe({
            next: (Respuesta: any) => {
              const CodigoGenerado = Respuesta?.data.Entidad?.CodigoPago;
              const Url = Respuesta?.data.Entidad?.UrlComprobante;

              if (Url) {
                this.Formulario.patchValue({ UrlComprobante: Url });

                if (CodigoGenerado) {
                  this.Formulario.patchValue({ CodigoPago: CodigoGenerado });
                  this.CodigoPagoTemporal = CodigoGenerado;
                }
                this.ArchivoComprobanteTemporal = null;
                this.GuardarPago();
                this.InputComprobante.nativeElement.value = '';
                if (Respuesta?.tipo === 'Éxito') {
                  this.Alerta.MostrarExito(Respuesta.message);
                }
                this.Spinner = false;
              } else {
                this.Alerta.MostrarAlerta('No se recibió URL del comprobante');
              }
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
            },
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
    } else {
      this.GuardarPago();
    }
  }

  private GuardarPago(): void {
    const datos = this.Formulario.value;

    if (!datos.CodigoPago && this.CodigoPagoTemporal) {
      datos.CodigoPago = this.CodigoPagoTemporal;
    }
    delete datos.UrlComprobante;
    const EsEdicion = this.Editando || datos.CodigoPago;

    if (EsEdicion) {
      this.pagoServicio.Editar(datos).subscribe(() => {
        this.CargarPagos();
        this.Cancelar();
        this.CodigoPagoTemporal = null;
      });
    } else {
      this.pagoServicio.Crear(datos).subscribe(() => {
        this.CargarPagos();
        this.Formulario.reset({ CodigoEmpresa: 8, Estatus: 1 });
        this.CodigoPagoTemporal = null;
      });
    }
  }


  VerComprobante(): void {
    const url = this.Formulario.value.UrlComprobante;
    if (url) {
      window.open(url, '_blank');
    }
  }

}
