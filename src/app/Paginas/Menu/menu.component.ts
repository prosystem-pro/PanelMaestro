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
import { PagoServicioSastreriaAnderTrajesYUniformes } from '../../Servicios/SastreriaAnderTrajesYUniformes/PagoServicio';
import { PagoServicioSastreriaAbarroteriaElAmanecer } from '../../Servicios/SastreriaAbarroteriaElAmanecer/PagoServicio';
import { PagoServicioAgenda } from '../../Servicios/Agenda/PagoServicio';
import { PagoServicioSastreriaDemo } from '../../Servicios/SastreriaDemo/PagoServicio';
import { PagoServicioSastreriaDemoOficial } from '../../Servicios/SastreriaDemoOficial/PagoServicio';

import { InformacionBd_ServicioChocosDeLaAbuela } from '../../Servicios/ChocosDeLaAbuela/InformacionBd_Servicio';
import { InformacionBd_ServicioCorazonTipico } from '../../Servicios/CorazonTipico/InformacionBd_Servicio';
import { InformacionBd_ServicioConstructoraMorgan } from '../../Servicios/ConstructoraMorgan/InformacionBd_Servicio';
import { InformacionBd_ServicioVendedor } from '../../Servicios/Vendedor/InformacionBd_Servicio';
import { InformacionBd_ServicioAjachelTravelAgency } from '../../Servicios/AjachelTravelAgency/InformacionBd_Servicio';
import { InformacionBd_ServicioRestauranteElBistro } from '../../Servicios/RestauranteElBistro/InformacionBd_Servicio';
import { InformacionBd_ServicioSastreriaConfeccionesCreateli } from '../../Servicios/SastreriaConfeccionesCreateli/InformacionBd_Servicio';
import { InformacionBd_ServicioSastreriaAnderTrajesYUniformes } from '../../Servicios/SastreriaAnderTrajesYUniformes/InformacionBd_Servicio';
import { InformacionBd_ServicioSastreriaAbarroteriaElAmanecer } from '../../Servicios/SastreriaAbarroteriaElAmanecer/InformacionBd_Servicio';
import { InformacionBd_ServicioAgenda } from '../../Servicios/Agenda/InformacionBd_Servicio';
import { InformacionBd_ServicioSastreriaDemo } from '../../Servicios/SastreriaDemo/InformacionBd_Servicio';
import { InformacionBd_ServicioSastreriaDemoOficial } from '../../Servicios/SastreriaDemoOficial/InformacionBd_Servicio';


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
  //SASTRERIA ANDER TRAJES Y UNIFORMES
  NombreEmpresaSastreriaAnderTrajesYUniformes: string = Entorno.NombreEmpresaSastreriaAnderTrajesYUniformes;
  LogoEmpresaSastreriaAnderTrajesYUniformes: string = Entorno.LogoSastreriaAnderTrajesYUniformes;
  ResumenPagosSastreriaAnderTrajesYUniformes: any = null;
  AnioSeleccionadoSastreriaAnderTrajesYUniformes = new Date().getFullYear();
  PaginaSastreriaAnderTrajesYUniformes: number = 0;
  InformacionBdSastreriaAnderTrajesYUniformes: any = null;
  //SASTRERIA ABARROTERIA EL AMANECER
  NombreEmpresaSastreriaAbarroteriaElAmanecer: string = Entorno.NombreEmpresaSastreriaAbarroteriaElAmanecer;
  LogoEmpresaSastreriaAbarroteriaElAmanecer: string = Entorno.LogoSastreriaAbarroteriaElAmanecer;
  ResumenPagosSastreriaAbarroteriaElAmanecer: any = null;
  AnioSeleccionadoSastreriaAbarroteriaElAmanecer = new Date().getFullYear();
  PaginaSastreriaAbarroteriaElAmanecer: number = 0;
  InformacionBdSastreriaAbarroteriaElAmanecer: any = null;
  //AGENDA
  NombreEmpresaAgenda: string = Entorno.NombreEmpresaAgenda;
  LogoEmpresaAgenda: string = Entorno.LogoAgenda;
  ResumenPagosAgenda: any = null;
  AnioSeleccionadoAgenda = new Date().getFullYear();
  PaginaAgenda: number = 0;
  InformacionBdAgenda: any = null;
  //SASTRERIA DEMO
  NombreEmpresaSastreriaDemo: string = Entorno.NombreEmpresaSastreriaDemo;
  LogoEmpresaSastreriaDemo: string = Entorno.LogoSastreriaDemo;
  ResumenPagosSastreriaDemo: any = null;
  AnioSeleccionadoSastreriaDemo = new Date().getFullYear();
  PaginaSastreriaDemo: number = 0;
  InformacionBdSastreriaDemo: any = null;
  //SASTRERIA DEMO OFICIAL
  NombreEmpresaSastreriaDemoOficial: string = Entorno.NombreEmpresaSastreriaDemoOficial;
  LogoEmpresaSastreriaDemoOficial: string = Entorno.LogoSastreriaDemoOficial;
  ResumenPagosSastreriaDemoOficial: any = null;
  AnioSeleccionadoSastreriaDemoOficial = new Date().getFullYear();
  PaginaSastreriaDemoOficial: number = 0;
  InformacionBdSastreriaDemoOficial: any = null;

  // Estados de visores individuales
  VisorChocosDeLaAbuela = false;
  VisorCorazonTipico = false;
  VisorConstructoraMorgan = false;
  VisorVendedor = false;
  VisorAjachelTravelAgency = false;
  VisorRestauranteElBistro = false;
  VisorSastreriaConfeccionesCreateli = false;
  VisorSastreriaAnderTrajesYUniformes = false;
  VisorSastreriaAbarroteriaElAmanecer = false;
  VisorAgenda = false;
  VisorSastreriaDemo = false;
  VisorSastreriaDemoOficial = false;

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
    private PagoServicioSastreriaAnderTrajesYUniformes: PagoServicioSastreriaAnderTrajesYUniformes,
    private PagoServicioSastreriaAbarroteriaElAmanecer: PagoServicioSastreriaAbarroteriaElAmanecer,
    private PagoServicioAgenda: PagoServicioAgenda,
    private PagoServicioSastreriaDemo: PagoServicioSastreriaDemo,
    private PagoServicioSastreriaDemoOficial: PagoServicioSastreriaDemoOficial,

    private InformacionBd_ServicioChocosDeLaAbuela: InformacionBd_ServicioChocosDeLaAbuela,
    private InformacionBd_ServicioVendedor: InformacionBd_ServicioVendedor,
    private InformacionBd_ServicioCorazonTipico: InformacionBd_ServicioCorazonTipico,
    private InformacionBd_ServicioConstructoraMorgan: InformacionBd_ServicioConstructoraMorgan,
    private InformacionBd_ServicioAjachelTravelAgency: InformacionBd_ServicioAjachelTravelAgency,
    private InformacionBd_ServicioRestauranteElBistro: InformacionBd_ServicioRestauranteElBistro,
    private InformacionBd_ServicioSastreriaConfeccionesCreateli: InformacionBd_ServicioSastreriaConfeccionesCreateli,
    private InformacionBd_ServicioSastreriaAnderTrajesYUniformes: InformacionBd_ServicioSastreriaAnderTrajesYUniformes,
    private InformacionBd_ServicioSastreriaAbarroteriaElAmanecer: InformacionBd_ServicioSastreriaAbarroteriaElAmanecer,
    private InformacionBd_ServicioAgenda: InformacionBd_ServicioAgenda,
    private InformacionBd_ServicioSastreriaDemo: InformacionBd_ServicioSastreriaDemo,
    private InformacionBd_ServicioSastreriaDemoOficial: InformacionBd_ServicioSastreriaDemoOficial,
    private Alerta: AlertaServicio
  ) { }
  ngOnInit() {
    this.CargarResumenPagosChocosDeLaAbuela(this.AnioSeleccionadoChocosDeLaAbuela);
    this.CargarResumenPagosCorazonTipico(this.AnioSeleccionadoCorazonTipico);
    this.CargarResumenPagosConstructoraMorgan(this.AnioSeleccionadoConstructoraMorgan);
    this.CargarResumenPagosVendedor(this.AnioSeleccionadoVendedor);
    // this.CargarResumenPagosAjachelTravelAgency(this.AnioSeleccionadoAjachelTravelAgency);
    // this.CargarResumenPagosRestauranteElBistro(this.AnioSeleccionadoRestauranteElBistro);
    this.CargarResumenPagosSastreriaConfeccionesCreateli(this.AnioSeleccionadoSastreriaConfeccionesCreateli);
    this.CargarResumenPagosSastreriaAnderTrajesYUniformes(this.AnioSeleccionadoSastreriaAnderTrajesYUniformes);
    this.CargarResumenPagosSastreriaAbarroteriaElAmanecer(this.AnioSeleccionadoSastreriaAbarroteriaElAmanecer);
    this.CargarResumenPagosAgenda(this.AnioSeleccionadoAgenda);
    this.CargarResumenPagosSastreriaDemo(this.AnioSeleccionadoSastreriaDemo);
    this.CargarResumenPagosSastreriaDemoOficial(this.AnioSeleccionadoSastreriaDemoOficial);

    this.CargarInformacionBdChocosDeLaAbuela();
    this.CargarInformacionBdCorazonTipico();
    this.CargarInformacionBdConstructoraMorgan();
    this.CargarInformacionBdVendedor();
    // this.CargarInformacionBdAjachelTravelAgency();
    // this.CargarInformacionBdRestauranteElBistro();
    this.CargarInformacionBdSastreriaConfeccionesCreateli();
    this.CargarInformacionBdSastreriaAnderTrajesYUniformes();
    this.CargarInformacionBdSastreriaAbarroteriaElAmanecer();
    this.CargarInformacionBdAgenda();
    this.CargarInformacionBdSastreriaDemo();
    this.CargarInformacionBdSastreriaDemoOficial();
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
      this.VisorSastreriaConfeccionesCreateli =
      this.VisorSastreriaAnderTrajesYUniformes =
      this.VisorSastreriaAbarroteriaElAmanecer =
      this.VisorAgenda =
      this.VisorSastreriaDemo =
      this.VisorSastreriaDemoOficial =
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
  //SASTRERIA ANDER TRAJES Y UNIFORMES
  CargarResumenPagosSastreriaAnderTrajesYUniformes(anio: number) {
    this.PagoServicioSastreriaAnderTrajesYUniformes.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosSastreriaAnderTrajesYUniformes = Respuesta.data;
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
  CargarInformacionBdSastreriaAnderTrajesYUniformes() {
    this.InformacionBd_ServicioSastreriaAnderTrajesYUniformes.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdSastreriaAnderTrajesYUniformes = Respuesta.data;
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
  //SASTRERIA ABARROTERIA EL AMANECER
  CargarResumenPagosSastreriaAbarroteriaElAmanecer(anio: number) {
    this.PagoServicioSastreriaAbarroteriaElAmanecer.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosSastreriaAbarroteriaElAmanecer = Respuesta.data;
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
  CargarInformacionBdSastreriaAbarroteriaElAmanecer() {
    this.InformacionBd_ServicioSastreriaAbarroteriaElAmanecer.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdSastreriaAbarroteriaElAmanecer = Respuesta.data;
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
  //AGENDA
  CargarResumenPagosAgenda(anio: number) {
    this.PagoServicioAgenda.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosAgenda = Respuesta.data;
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
  CargarInformacionBdAgenda() {
    this.InformacionBd_ServicioAgenda.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdAgenda = Respuesta.data;
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
  //SASTRERIA DEMO
  CargarResumenPagosSastreriaDemo(anio: number) {
    this.PagoServicioSastreriaDemo.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosSastreriaDemo = Respuesta.data;
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
  CargarInformacionBdSastreriaDemo() {
    this.InformacionBd_ServicioSastreriaDemo.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdSastreriaDemo = Respuesta.data;
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
  //SASTRERIA DEMO OFICIAL
  CargarResumenPagosSastreriaDemoOficial(anio: number) {
    this.PagoServicioSastreriaDemoOficial.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosSastreriaDemoOficial = Respuesta.data;
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
  CargarInformacionBdSastreriaDemoOficial() {
    this.InformacionBd_ServicioSastreriaDemoOficial.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdSastreriaDemoOficial = Respuesta.data;
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
