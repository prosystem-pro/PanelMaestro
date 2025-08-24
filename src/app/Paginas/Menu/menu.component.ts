import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entorno } from '../../Entornos/Entorno';

import { PagoServicioCafeJuanAna } from '../../Servicios/CafeJuanAna/PagoServicio';
import { PagoServicioDulceTentacion } from '../../Servicios/DulceTentacion/PagoServicio';
import { PagoServicioPromesaDeDios } from '../../Servicios/PromesaDeDios/PagoServicio';
import { PagoServicioRestauranteKaski } from '../../Servicios/RestauranteKaski/PagoServicio';
import { PagoServicioVendedor } from '../../Servicios/Vendedor/PagoServicio';

import { InformacionBd_Servicio } from '../../Servicios/PromesaDeDios/InformacionBd_Servicio';

import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AlertaServicio } from '../../Servicios/Alerta-Servicio';
import { SpinnerGlobalComponent } from '../../Componentes/spinner-global/spinner-global.component';



@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule, SpinnerGlobalComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  Spinner: boolean = false;

  NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
  LogoEmpresaPromesaDeDios: string = Entorno.LogoPromesaDeDios;
  ResumenPagosPromesaDeDios: any = null;
  AnioSeleccionadoPromesaDeDios = new Date().getFullYear();
  PaginaPromesaDeDios: number = 0;
  InformacionBdPromesaDeDios: any = null;

  NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;
  LogoEmpresaCafeJuanAna: string = Entorno.LogoCafeJuanAna;
  ResumenPagosCafeJuanAna: any = null;
  AnioSeleccionadoCafeJuanAna = new Date().getFullYear();
  PaginaCafeJuanAna: number = 0;

  NombreEmpresaDulceTentacion: string = Entorno.NombreEmpresaDulceTentacion;
  LogoEmpresaDulceTentacion: string = Entorno.LogoDulceTentacion;
  ResumenPagosDulceTentacion: any = null;
  AnioSeleccionadoDulceTentacion = new Date().getFullYear();
  PaginaDulceTentacion: number = 0;

  NombreEmpresaRestauranteKaski: string = Entorno.NombreEmpresaRestauranteKaski;
  LogoEmpresaRestauranteKaski: string = Entorno.LogoRestauranteKaski;
  ResumenPagosRestauranteKaski: any = null;
  AnioSeleccionadoRestauranteKaski = new Date().getFullYear();
  PaginaRestauranteKaski: number = 0;

  NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
  LogoEmpresaVendedor: string = Entorno.LogoVendedor;
  ResumenPagosVendedor: any = null;
  AnioSeleccionadoVendedor = new Date().getFullYear();
  PaginaVendedor: number = 0;

  // Estados de visores individuales
  VisorPromesaDeDios = false;
  VisorCafeJuanAna = false;
  VisorDulceTentacion = false;
  VisorRestauranteKaski = false;
  VisorVendedor = false;

  // Switch maestro
  VisorMaestro = false;

  constructor(private router: Router,
    private PagoServicioCafeJuanAna: PagoServicioCafeJuanAna,
    private PagoServicioDulceTentacion: PagoServicioDulceTentacion,
    private PagoServicioPromesaDeDios: PagoServicioPromesaDeDios,
    private PagoServicioRestauranteKaski: PagoServicioRestauranteKaski,
    private PagoServicioVendedor: PagoServicioVendedor,

    private InformacionBd_Servicio: InformacionBd_Servicio,
    private Alerta: AlertaServicio
  ) { }
  ngOnInit() {
    this.CargarResumenPagosCafeJuanAna(this.AnioSeleccionadoCafeJuanAna);
    this.CargarResumenPagosDulceTentacion(this.AnioSeleccionadoDulceTentacion);
    this.CargarResumenPagosPromesaDeDios(this.AnioSeleccionadoPromesaDeDios);
    this.CargarResumenPagosRestauranteKaski(this.AnioSeleccionadoRestauranteKaski);
    this.CargarResumenPagosVendedor(this.AnioSeleccionadoVendedor);

    this.CargarInformacionBdPromesaDeDios();
  }


  AbrirLogin(Empresa: string) {
    this.router.navigate(['/login'], {
      queryParams: { Empresa }
    }).then(navegado => {
      if (navegado) {
        console.log('Navegación exitosa hacia /login con queryParams:', Empresa);
      } else {
        console.error('Error: No se pudo navegar hacia /login');
      }
    });
  }
  CambiarTodosLosVisores() {
    this.VisorPromesaDeDios =
      this.VisorCafeJuanAna =
      this.VisorDulceTentacion =
      this.VisorVendedor =
      this.VisorRestauranteKaski = this.VisorMaestro;
  }

  CargarResumenPagosCafeJuanAna(anio: number) {
    this.PagoServicioCafeJuanAna.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosCafeJuanAna = Respuesta.data;
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
  CargarResumenPagosDulceTentacion(anio: number) {
    this.PagoServicioDulceTentacion.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosDulceTentacion = Respuesta.data;
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
  CargarResumenPagosPromesaDeDios(anio: number) {
    this.PagoServicioPromesaDeDios.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosPromesaDeDios = Respuesta.data;
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
  CargarInformacionBdPromesaDeDios() {
    this.InformacionBd_Servicio.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdPromesaDeDios = Respuesta.data;
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
  CargarResumenPagosRestauranteKaski(anio: number) {
    this.PagoServicioRestauranteKaski.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosRestauranteKaski = Respuesta.data;
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
  CargarResumenPagosVendedor(anio: number) {
    this.PagoServicioVendedor.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosVendedor = Respuesta.data;
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
