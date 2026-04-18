import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entorno } from '../../Entornos/Entorno';

import { PagoServicioChocosDeLaAbuela } from '../../Servicios/ChocosDeLaAbuela/PagoServicio';
import { PagoServicioCorazonTipico } from '../../Servicios/CorazonTipico/PagoServicio';
import { PagoServicioConstructoraMorgan } from '../../Servicios/ConstructoraMorgan/PagoServicio';
import { PagoServicioVendedor } from '../../Servicios/Vendedor/PagoServicio';
import { PagoServicioAjachelTravelAgency } from '../../Servicios/AjachelTravelAgency/PagoServicio';
import { PagoServicioRestauranteElBistro } from '../../Servicios/RestauranteElBistro/PagoServicio';
import { PagoServicioSastreriaConfeccionesCreateli } from '../../Servicios/SastreriaConfeccionesCreateli/PagoServicio';

import { InformacionBd_ServicioChocosDeLaAbuela } from '../../Servicios/ChocosDeLaAbuela/InformacionBd_Servicio';
import { InformacionBd_ServicioCorazonTipico } from '../../Servicios/CorazonTipico/InformacionBd_Servicio';
import { InformacionBd_ServicioConstructoraMorgan } from '../../Servicios/ConstructoraMorgan/InformacionBd_Servicio';
import { InformacionBd_ServicioVendedor } from '../../Servicios/Vendedor/InformacionBd_Servicio';
import { InformacionBd_ServicioAjachelTravelAgency } from '../../Servicios/AjachelTravelAgency/InformacionBd_Servicio';
import { InformacionBd_ServicioRestauranteElBistro } from '../../Servicios/RestauranteElBistro/InformacionBd_Servicio';
import { InformacionBd_ServicioSastreriaConfeccionesCreateli } from '../../Servicios/SastreriaConfeccionesCreateli/InformacionBd_Servicio';


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
  //CHOCOS DE LA ABUELA
  NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
  LogoEmpresaChocosDeLaAbuela: string = Entorno.LogoChocosDeLaAbuela;
  ResumenPagosChocosDeLaAbuela: any = null;
  AnioSeleccionadoChocosDeLaAbuela = new Date().getFullYear();
  PaginaChocosDeLaAbuela: number = 0;
  InformacionBdChocosDeLaAbuela: any = null;
  //CORAZON TIPICO
  NombreEmpresaCorazonTipico: string = Entorno.NombreEmpresaCorazonTipico;
  LogoEmpresaCorazonTipico: string = Entorno.LogoCorazonTipico;
  ResumenPagosCorazonTipico: any = null;
  AnioSeleccionadoCorazonTipico = new Date().getFullYear();
  PaginaCorazonTipico: number = 0;
  InformacionBdCorazonTipico: any = null;
  //PROMESA DE DIOS
  NombreEmpresaConstructoraMorgan: string = Entorno.NombreEmpresaConstructoraMorgan;
  LogoEmpresaConstructoraMorgan: string = Entorno.LogoConstructoraMorgan;
  ResumenPagosConstructoraMorgan: any = null;
  AnioSeleccionadoConstructoraMorgan = new Date().getFullYear();
  PaginaConstructoraMorgan: number = 0;
  InformacionBdConstructoraMorgan: any = null;
  //VENDEDOR
  NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
  LogoEmpresaVendedor: string = Entorno.LogoVendedor;
  ResumenPagosVendedor: any = null;
  AnioSeleccionadoVendedor = new Date().getFullYear();
  PaginaVendedor: number = 0;
  InformacionBdVendedor: any = null;
  //AJACHEL TRAVEL AGENCY
  NombreEmpresaAjachelTravelAgency: string = Entorno.NombreEmpresaAjachelTravelAgency;
  LogoEmpresaAjachelTravelAgency: string = Entorno.LogoAjachelTravelAgency;
  ResumenPagosAjachelTravelAgency: any = null;
  AnioSeleccionadoAjachelTravelAgency = new Date().getFullYear();
  PaginaAjachelTravelAgency: number = 0;
  InformacionBdAjachelTravelAgency: any = null;
  //RESTAURANTE EL BISTRO
  NombreEmpresaRestauranteElBistro: string = Entorno.NombreEmpresaRestauranteElBistro;
  LogoEmpresaRestauranteElBistro: string = Entorno.LogoRestauranteElBistro;
  ResumenPagosRestauranteElBistro: any = null;
  AnioSeleccionadoRestauranteElBistro = new Date().getFullYear();
  PaginaRestauranteElBistro: number = 0;
  InformacionBdRestauranteElBistro: any = null;
  //SASTRERIA CONFECCIONES CREATELI
  NombreEmpresaSastreriaConfeccionesCreateli: string = Entorno.NombreEmpresaSastreriaConfeccionesCreateli;
  LogoEmpresaSastreriaConfeccionesCreateli: string = Entorno.LogoSastreriaConfeccionesCreateli;
  ResumenPagosSastreriaConfeccionesCreateli: any = null;
  AnioSeleccionadoSastreriaConfeccionesCreateli = new Date().getFullYear();
  PaginaSastreriaConfeccionesCreateli: number = 0;
  InformacionBdSastreriaConfeccionesCreateli: any = null;

  // Estados de visores individuales
  VisorChocosDeLaAbuela = false;
  VisorCorazonTipico = false;
  VisorConstructoraMorgan = false;
  VisorVendedor = false;
  VisorAjachelTravelAgency = false;
  VisorRestauranteElBistro = false;
  VisorSastreriaConfeccionesCreateli = false;

  // Switch maestro
  VisorMaestro = false;

  constructor(private router: Router,
    private PagoServicioChocosDeLaAbuela: PagoServicioChocosDeLaAbuela,
    private PagoServicioCorazonTipico: PagoServicioCorazonTipico,
    private PagoServicioConstructoraMorgan: PagoServicioConstructoraMorgan,
    private PagoServicioVendedor: PagoServicioVendedor,
    private PagoServicioAjachelTravelAgency: PagoServicioAjachelTravelAgency,
    private PagoServicioRestauranteElBistro: PagoServicioRestauranteElBistro,
    private PagoServicioSastreriaConfeccionesCreateli: PagoServicioSastreriaConfeccionesCreateli,

    private InformacionBd_ServicioChocosDeLaAbuela: InformacionBd_ServicioChocosDeLaAbuela,
    private InformacionBd_ServicioVendedor: InformacionBd_ServicioVendedor,
    private InformacionBd_ServicioCorazonTipico: InformacionBd_ServicioCorazonTipico,
    private InformacionBd_ServicioConstructoraMorgan: InformacionBd_ServicioConstructoraMorgan,
    private InformacionBd_ServicioAjachelTravelAgency: InformacionBd_ServicioAjachelTravelAgency,
    private InformacionBd_ServicioRestauranteElBistro: InformacionBd_ServicioRestauranteElBistro,
    private InformacionBd_ServicioSastreriaConfeccionesCreateli: InformacionBd_ServicioSastreriaConfeccionesCreateli,
    private Alerta: AlertaServicio
  ) { }
  ngOnInit() {
    this.CargarResumenPagosChocosDeLaAbuela(this.AnioSeleccionadoChocosDeLaAbuela);
    this.CargarResumenPagosCorazonTipico(this.AnioSeleccionadoCorazonTipico);
    this.CargarResumenPagosConstructoraMorgan(this.AnioSeleccionadoConstructoraMorgan);
    this.CargarResumenPagosVendedor(this.AnioSeleccionadoVendedor);
    this.CargarResumenPagosAjachelTravelAgency(this.AnioSeleccionadoAjachelTravelAgency);
    this.CargarResumenPagosRestauranteElBistro(this.AnioSeleccionadoRestauranteElBistro);
    this.CargarResumenPagosSastreriaConfeccionesCreateli(this.AnioSeleccionadoSastreriaConfeccionesCreateli);

    this.CargarInformacionBdChocosDeLaAbuela();
    this.CargarInformacionBdCorazonTipico();
    this.CargarInformacionBdConstructoraMorgan();
    this.CargarInformacionBdVendedor();
    this.CargarInformacionBdAjachelTravelAgency();
    this.CargarInformacionBdRestauranteElBistro();
    this.CargarInformacionBdSastreriaConfeccionesCreateli();
  }


  AbrirLogin(Empresa: string) {
    this.router.navigate(['/login'], {
      queryParams: { Empresa }
    }).then(navegado => {
      if (navegado) {
      } else {
        console.error('Error: No se pudo navegar hacia /login');
      }
    });
  }
  CambiarTodosLosVisores() {
    this.VisorChocosDeLaAbuela =
      this.VisorCorazonTipico =
      this.VisorConstructoraMorgan =
      this.VisorAjachelTravelAgency =
      this.VisorRestauranteElBistro =
      this.VisorVendedor = this.VisorMaestro;
  }
  //CHOCOS DE LA ABUELA
  CargarResumenPagosChocosDeLaAbuela(anio: number) {
    this.PagoServicioChocosDeLaAbuela.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosChocosDeLaAbuela = Respuesta.data;
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
  CargarInformacionBdChocosDeLaAbuela() {
    this.InformacionBd_ServicioChocosDeLaAbuela.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdChocosDeLaAbuela = Respuesta.data;
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
  //CORAZÓN TÍPICO
  CargarResumenPagosCorazonTipico(anio: number) {
    this.PagoServicioCorazonTipico.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosCorazonTipico = Respuesta.data;
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
  CargarInformacionBdCorazonTipico() {
    this.InformacionBd_ServicioCorazonTipico.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdCorazonTipico = Respuesta.data;
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
  //CONSTRUCTORA MORGAN
  CargarResumenPagosConstructoraMorgan(anio: number) {
    this.PagoServicioConstructoraMorgan.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosConstructoraMorgan = Respuesta.data;
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
  CargarInformacionBdConstructoraMorgan() {
    this.InformacionBd_ServicioConstructoraMorgan.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdConstructoraMorgan = Respuesta.data;
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
  //VENDEDOR
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
  CargarInformacionBdVendedor() {
    this.InformacionBd_ServicioVendedor.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdVendedor = Respuesta.data;
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
  //AJACHEL TRAVEL AGENCY
  CargarResumenPagosAjachelTravelAgency(anio: number) {
    this.PagoServicioAjachelTravelAgency.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosAjachelTravelAgency = Respuesta.data;
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
  CargarInformacionBdAjachelTravelAgency() {
    this.InformacionBd_ServicioAjachelTravelAgency.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdAjachelTravelAgency = Respuesta.data;
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

  //RESTAURANTE EL BISTRO
  CargarResumenPagosRestauranteElBistro(anio: number) {
    this.PagoServicioRestauranteElBistro.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosRestauranteElBistro = Respuesta.data;
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
  CargarInformacionBdRestauranteElBistro() {
    this.InformacionBd_ServicioRestauranteElBistro.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdRestauranteElBistro = Respuesta.data;
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
    //SASTRERIA CONFECCIONES CREATELI
  CargarResumenPagosSastreriaConfeccionesCreateli(anio: number) {
    this.PagoServicioSastreriaConfeccionesCreateli.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosSastreriaConfeccionesCreateli = Respuesta.data;
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
  CargarInformacionBdSastreriaConfeccionesCreateli() {
    this.InformacionBd_ServicioSastreriaConfeccionesCreateli.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdSastreriaConfeccionesCreateli = Respuesta.data;
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
