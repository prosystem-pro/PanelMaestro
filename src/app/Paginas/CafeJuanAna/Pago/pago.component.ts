import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PagoServicioCafeJuanAna } from '../../../Servicios/CafeJuanAna/PagoServicio';
import { HttpClient } from '@angular/common/http';
import { Entorno } from '../../../Entornos/Entorno';
import { CommonModule } from '@angular/common';
import { AlertaServicio } from '../../../Servicios/Alerta-Servicio';
import { EmpresaServicio } from '../../../Servicios/CafeJuanAna/EmpresaServicio';
import { SidebarCafeJuanAnaComponent } from '../Sidebar/sidebar.component';

@Component({
  selector: 'app-pago-CafeJuanAna',
  imports: [FormsModule, CommonModule, ReactiveFormsModule,SidebarCafeJuanAnaComponent],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoCafeJuanAnaComponent implements OnInit {
  LogoEmpresa = Entorno.LogoCafeJuanAna;
  Empresa = Entorno.NombreEmpresaCafeJuanAna;
  @ViewChild('InputComprobante') InputComprobante!: ElementRef<HTMLInputElement>;
  ArchivoComprobanteTemporal: File | null = null;
  CodigoPagoTemporal: number | null = null;
  Cargando: boolean = false;
  AnioSeleccionado: number = new Date().getFullYear();
  Datos: any[] = [];
  Formulario!: FormGroup;
  Editando: boolean = false;
  private NombreEmpresa = `${Entorno.NombreEmpresaCafeJuanAna}`;
  private Url = `${Entorno.ApiUrlCafeJuanAna}`;

  constructor(
    private pagoServicio: PagoServicioCafeJuanAna,
    private fb: FormBuilder,
    private EmpresaServicio: EmpresaServicio,
    private AlertaServicio: AlertaServicio,
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
    this.pagoServicio.Listado(this.AnioSeleccionado).subscribe({
      next: (res) => {
        this.Datos = res;
      },
      error: (err) => {
        console.error('Error al cargar pagos', err);
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

  Eliminar(codigo: number): void {
    if (confirm('¿Seguro que deseas eliminar este pago?')) {
      this.pagoServicio.Eliminar(codigo).subscribe(() => this.CargarPagos());
    }
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
    if (this.ArchivoComprobanteTemporal) {
      this.Cargando = true;
      const NombreEmpresa = (this.NombreEmpresa ?? 'Promesa_De_Dios').replace(/_/g, '');

      this.EmpresaServicio.ConseguirPrimeraEmpresa().subscribe({
        next: (empresa) => {
          if (!empresa) {
            this.Cargando = false;
            this.AlertaServicio.MostrarAlerta('No se encontró ninguna empresa');
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

          this.http.post(`${this.Url}subir-imagen`, formData).subscribe({
            next: (res: any) => {
              this.Cargando = false;
              const CodigoGenerado = res?.Entidad?.CodigoPago;
              const Url = res?.Entidad?.UrlComprobante;

              if (Url) {
                this.Formulario.patchValue({ UrlComprobante: Url });

                if (CodigoGenerado) {
                  this.Formulario.patchValue({ CodigoPago: CodigoGenerado });
                  this.CodigoPagoTemporal = CodigoGenerado;
                }
                this.ArchivoComprobanteTemporal = null;
                this.GuardarPago();
                this.InputComprobante.nativeElement.value = '';
                this.AlertaServicio.MostrarExito('Imagen subida con éxito');
              } else {
                this.AlertaServicio.MostrarAlerta('No se recibió URL del comprobante');
              }
            },
            error: (err) => {
              this.Cargando = false;
              this.AlertaServicio.MostrarError(err, 'Error al subir imagen');
            },
          });
        },
        error: (err) => {
          this.Cargando = false;
          this.AlertaServicio.MostrarError(err, 'Error al obtener empresa');
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
