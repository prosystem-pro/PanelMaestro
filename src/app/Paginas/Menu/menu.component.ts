import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entorno } from '../../Entornos/Entorno';
// ********************** C.A.R.R.I.T.O--W.E.B **********************
import { PagoServicioChocosDeLaAbuela } from '../../Servicios/ChocosDeLaAbuela/PagoServicio';
import { PagoServicioConstructoraMorgan } from '../../Servicios/ConstructoraMorgan/PagoServicio';

import { PagoServicioAjachelTravelAgency } from '../../Servicios/AjachelTravelAgency/PagoServicio';
import { PagoServicioCevicheriaCastillo } from '../../Servicios/CevicheriaCastillo/PagoServicio';
import { PagoServicioRestauranteElBistro } from '../../Servicios/RestauranteElBistro/PagoServicio';
// ********************** S.A.S.T.R.E.R.I.A.S ***********************
import { PagoServicioSastreriaConfeccionesCreateli } from '../../Servicios/SastreriaConfeccionesCreateli/PagoServicio';
import { PagoServicioSastreriaAbarroteriaElAmanecer } from '../../Servicios/SastreriaAbarroteriaElAmanecer/PagoServicio';
import { PagoServicioSastreriaFerreteriaLaBendicionOficial } from '../../Servicios/SastreriaFerreteriaLaBendicionOficial/PagoServicio';
// ********************** A.G.E.N.D.A ******************************* 
import { PagoServicioAgenda } from '../../Servicios/Agenda/PagoServicio';
// ********************** P.U.N.T.O.V.E.N.T.A *********************** 
import { PagoServicioPuntoVentaPanaderiaPromesaDeDios } from '../../Servicios/PuntoVentaPanaderiaPromesaDeDios/PagoServicio';
// ********************** D.E.M.O *********************************** 
import { PagoServicioVendedor } from '../../Servicios/Vendedor/PagoServicio';
import { PagoServicioSastreriaDemoOficial } from '../../Servicios/SastreriaDemoOficial/PagoServicio';


// ********************** C.A.R.R.I.T.O--W.E.B **********************
import { InformacionBd_ServicioChocosDeLaAbuela } from '../../Servicios/ChocosDeLaAbuela/InformacionBd_Servicio';
import { InformacionBd_ServicioConstructoraMorgan } from '../../Servicios/ConstructoraMorgan/InformacionBd_Servicio';
import { InformacionBd_ServicioAjachelTravelAgency } from '../../Servicios/AjachelTravelAgency/InformacionBd_Servicio';
import { InformacionBd_ServicioCevicheriaCastillo } from '../../Servicios/CevicheriaCastillo/InformacionBd_Servicio';
import { InformacionBd_ServicioRestauranteElBistro } from '../../Servicios/RestauranteElBistro/InformacionBd_Servicio';
// ********************** S.A.S.T.R.E.R.I.A.S ***********************
import { InformacionBd_ServicioSastreriaConfeccionesCreateli } from '../../Servicios/SastreriaConfeccionesCreateli/InformacionBd_Servicio';
import { InformacionBd_ServicioSastreriaAbarroteriaElAmanecer } from '../../Servicios/SastreriaAbarroteriaElAmanecer/InformacionBd_Servicio';
import { InformacionBd_ServicioSastreriaFerreteriaLaBendicionOficial } from '../../Servicios/SastreriaFerreteriaLaBendicionOficial/InformacionBd_Servicio';
// ********************** A.G.E.N.D.A ******************************* 
import { InformacionBd_ServicioAgenda } from '../../Servicios/Agenda/InformacionBd_Servicio';
// ********************** P.U.N.T.O.V.E.N.T.A *********************** 
import { InformacionBd_ServicioPuntoVentaPanaderiaPromesaDeDios } from '../../Servicios/PuntoVentaPanaderiaPromesaDeDios/InformacionBd_Servicio';
// ********************** D.E.M.O *********************************** 
import { InformacionBd_ServicioVendedor } from '../../Servicios/Vendedor/InformacionBd_Servicio';
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
  // ********************** C.A.R.R.I.T.O--W.E.B **********************
  //CHOCOS DE LA ABUELA
  NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
  LogoEmpresaChocosDeLaAbuela: string = Entorno.LogoChocosDeLaAbuela;
  ResumenPagosChocosDeLaAbuela: any = null;
  AnioSeleccionadoChocosDeLaAbuela = new Date().getFullYear();
  PaginaChocosDeLaAbuela: number = 0;
  InformacionBdChocosDeLaAbuela: any = null;
  //PROMESA DE DIOS
  NombreEmpresaConstructoraMorgan: string = Entorno.NombreEmpresaConstructoraMorgan;
  LogoEmpresaConstructoraMorgan: string = Entorno.LogoConstructoraMorgan;
  ResumenPagosConstructoraMorgan: any = null;
  AnioSeleccionadoConstructoraMorgan = new Date().getFullYear();
  PaginaConstructoraMorgan: number = 0;
  InformacionBdConstructoraMorgan: any = null;
  //AJACHEL TRAVEL AGENCY
  NombreEmpresaAjachelTravelAgency: string = Entorno.NombreEmpresaAjachelTravelAgency;
  LogoEmpresaAjachelTravelAgency: string = Entorno.LogoAjachelTravelAgency;
  ResumenPagosAjachelTravelAgency: any = null;
  AnioSeleccionadoAjachelTravelAgency = new Date().getFullYear();
  PaginaAjachelTravelAgency: number = 0;
  InformacionBdAjachelTravelAgency: any = null;
  //CEVICHERIA CASTILLO
  NombreEmpresaCevicheriaCastillo: string = Entorno.NombreEmpresaCevicheriaCastillo;
  LogoEmpresaCevicheriaCastillo: string = Entorno.LogoCevicheriaCastillo;
  ResumenPagosCevicheriaCastillo: any = null;
  AnioSeleccionadoCevicheriaCastillo = new Date().getFullYear();
  PaginaCevicheriaCastillo: number = 0;
  InformacionBdCevicheriaCastillo: any = null;
  //RESTAURANTE EL BISTRO
  NombreEmpresaRestauranteElBistro: string = Entorno.NombreEmpresaRestauranteElBistro;
  LogoEmpresaRestauranteElBistro: string = Entorno.LogoRestauranteElBistro;
  ResumenPagosRestauranteElBistro: any = null;
  AnioSeleccionadoRestauranteElBistro = new Date().getFullYear();
  PaginaRestauranteElBistro: number = 0;
  InformacionBdRestauranteElBistro: any = null;
  // ********************** S.A.S.T.R.E.R.I.A.S ***********************
  //SASTRERIA CONFECCIONES CREATELI
  NombreEmpresaSastreriaConfeccionesCreateli: string = Entorno.NombreEmpresaSastreriaConfeccionesCreateli;
  LogoEmpresaSastreriaConfeccionesCreateli: string = Entorno.LogoSastreriaConfeccionesCreateli;
  ResumenPagosSastreriaConfeccionesCreateli: any = null;
  AnioSeleccionadoSastreriaConfeccionesCreateli = new Date().getFullYear();
  PaginaSastreriaConfeccionesCreateli: number = 0;
  InformacionBdSastreriaConfeccionesCreateli: any = null;
  //SASTRERIA ABARROTERIA EL AMANECER
  NombreEmpresaSastreriaAbarroteriaElAmanecer: string = Entorno.NombreEmpresaSastreriaAbarroteriaElAmanecer;
  LogoEmpresaSastreriaAbarroteriaElAmanecer: string = Entorno.LogoSastreriaAbarroteriaElAmanecer;
  ResumenPagosSastreriaAbarroteriaElAmanecer: any = null;
  AnioSeleccionadoSastreriaAbarroteriaElAmanecer = new Date().getFullYear();
  PaginaSastreriaAbarroteriaElAmanecer: number = 0;
  InformacionBdSastreriaAbarroteriaElAmanecer: any = null;
  //SASTRERIA FERRETERIA LA BENDICION OFICIAL
  NombreEmpresaSastreriaFerreteriaLaBendicionOficial: string = Entorno.NombreEmpresaSastreriaFerreteriaLaBendicionOficial;
  LogoEmpresaSastreriaFerreteriaLaBendicionOficial: string = Entorno.LogoSastreriaFerreteriaLaBendicionOficial;
  ResumenPagosSastreriaFerreteriaLaBendicionOficial: any = null;
  AnioSeleccionadoSastreriaFerreteriaLaBendicionOficial = new Date().getFullYear();
  PaginaSastreriaFerreteriaLaBendicionOficial: number = 0;
  InformacionBdSastreriaFerreteriaLaBendicionOficial: any = null;
  // ********************** A.G.E.N.D.A *******************************
  //AGENDA
  NombreEmpresaAgenda: string = Entorno.NombreEmpresaAgenda;
  LogoEmpresaAgenda: string = Entorno.LogoAgenda;
  ResumenPagosAgenda: any = null;
  AnioSeleccionadoAgenda = new Date().getFullYear();
  PaginaAgenda: number = 0;
  InformacionBdAgenda: any = null;
  // ********************** P.U.N.T.O.V.E.N.T.A *********************** 
  //PUNTO VENTA PANADERIA PROMESA DE DIOS
  NombreEmpresaPuntoVentaPanaderiaPromesaDeDios: string = Entorno.NombreEmpresaPuntoVentaPanaderiaPromesaDeDios;
  LogoEmpresaPuntoVentaPanaderiaPromesaDeDios: string = Entorno.LogoPuntoVentaPanaderiaPromesaDeDios;
  ResumenPagosPuntoVentaPanaderiaPromesaDeDios: any = null;
  AnioSeleccionadoPuntoVentaPanaderiaPromesaDeDios = new Date().getFullYear();
  PaginaPuntoVentaPanaderiaPromesaDeDios: number = 0;
  InformacionBdPuntoVentaPanaderiaPromesaDeDios: any = null;
  // ********************** D.E.M.O *********************************** 
  //VENDEDOR
  NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
  LogoEmpresaVendedor: string = Entorno.LogoVendedor;
  ResumenPagosVendedor: any = null;
  AnioSeleccionadoVendedor = new Date().getFullYear();
  PaginaVendedor: number = 0;
  InformacionBdVendedor: any = null;

  //SASTRERIA DEMO OFICIAL
  NombreEmpresaSastreriaDemoOficial: string = Entorno.NombreEmpresaSastreriaDemoOficial;
  LogoEmpresaSastreriaDemoOficial: string = Entorno.LogoSastreriaDemoOficial;
  ResumenPagosSastreriaDemoOficial: any = null;
  AnioSeleccionadoSastreriaDemoOficial = new Date().getFullYear();
  PaginaSastreriaDemoOficial: number = 0;
  InformacionBdSastreriaDemoOficial: any = null;

  // Estados de visores individuales
  VisorChocosDeLaAbuela = false;
  VisorConstructoraMorgan = false;
  VisorVendedor = false;
  VisorAjachelTravelAgency = false;
  VisorCevicheriaCastillo = false;
  VisorRestauranteElBistro = false;
  VisorSastreriaConfeccionesCreateli = false;
  VisorSastreriaAbarroteriaElAmanecer = false;
  VisorSastreriaFerreteriaLaBendicion = false;
  VisorSastreriaFerreteriaLaBendicionOficial = false;
  VisorAgenda = false;
  VisorPuntoVentaPanaderiaPromesaDeDios = false;
  VisorSastreriaDemoOficial = false;

  // Switch maestro
  VisorMaestro = false;

  constructor(private router: Router,
    private PagoServicioChocosDeLaAbuela: PagoServicioChocosDeLaAbuela,
    private PagoServicioConstructoraMorgan: PagoServicioConstructoraMorgan,
    private PagoServicioVendedor: PagoServicioVendedor,
    private PagoServicioAjachelTravelAgency: PagoServicioAjachelTravelAgency,
    private PagoServicioCevicheriaCastillo: PagoServicioCevicheriaCastillo,
    private PagoServicioRestauranteElBistro: PagoServicioRestauranteElBistro,
    private PagoServicioSastreriaConfeccionesCreateli: PagoServicioSastreriaConfeccionesCreateli,
    private PagoServicioSastreriaAbarroteriaElAmanecer: PagoServicioSastreriaAbarroteriaElAmanecer,
    private PagoServicioSastreriaFerreteriaLaBendicionOficial: PagoServicioSastreriaFerreteriaLaBendicionOficial,
    private PagoServicioAgenda: PagoServicioAgenda,
    private PagoServicioPuntoVentaPanaderiaPromesaDeDios: PagoServicioPuntoVentaPanaderiaPromesaDeDios,
    private PagoServicioSastreriaDemoOficial: PagoServicioSastreriaDemoOficial,

    private InformacionBd_ServicioChocosDeLaAbuela: InformacionBd_ServicioChocosDeLaAbuela,
    private InformacionBd_ServicioVendedor: InformacionBd_ServicioVendedor,
    private InformacionBd_ServicioConstructoraMorgan: InformacionBd_ServicioConstructoraMorgan,
    private InformacionBd_ServicioAjachelTravelAgency: InformacionBd_ServicioAjachelTravelAgency,
    private InformacionBd_ServicioCevicheriaCastillo: InformacionBd_ServicioCevicheriaCastillo,
    private InformacionBd_ServicioRestauranteElBistro: InformacionBd_ServicioRestauranteElBistro,
    private InformacionBd_ServicioSastreriaConfeccionesCreateli: InformacionBd_ServicioSastreriaConfeccionesCreateli,
    private InformacionBd_ServicioSastreriaAbarroteriaElAmanecer: InformacionBd_ServicioSastreriaAbarroteriaElAmanecer,
    private InformacionBd_ServicioSastreriaFerreteriaLaBendicionOficial: InformacionBd_ServicioSastreriaFerreteriaLaBendicionOficial,
    private InformacionBd_ServicioAgenda: InformacionBd_ServicioAgenda,
    private InformacionBd_ServicioPuntoVentaPanaderiaPromesaDeDios: InformacionBd_ServicioPuntoVentaPanaderiaPromesaDeDios,
    private InformacionBd_ServicioSastreriaDemoOficial: InformacionBd_ServicioSastreriaDemoOficial,
    private Alerta: AlertaServicio
  ) { }
  ngOnInit() {
    this.CargarResumenPagosChocosDeLaAbuela(this.AnioSeleccionadoChocosDeLaAbuela);
    this.CargarResumenPagosConstructoraMorgan(this.AnioSeleccionadoConstructoraMorgan);
    this.CargarResumenPagosVendedor(this.AnioSeleccionadoVendedor);
    // this.CargarResumenPagosAjachelTravelAgency(this.AnioSeleccionadoAjachelTravelAgency);
    this.CargarResumenPagosCevicheriaCastillo(this.AnioSeleccionadoCevicheriaCastillo);
    // this.CargarResumenPagosRestauranteElBistro(this.AnioSeleccionadoRestauranteElBistro);
    this.CargarResumenPagosSastreriaConfeccionesCreateli(this.AnioSeleccionadoSastreriaConfeccionesCreateli);
    this.CargarResumenPagosSastreriaAbarroteriaElAmanecer(this.AnioSeleccionadoSastreriaAbarroteriaElAmanecer);
    this.CargarResumenPagosSastreriaFerreteriaLaBendicionOficial(this.AnioSeleccionadoSastreriaFerreteriaLaBendicionOficial);
    this.CargarResumenPagosAgenda(this.AnioSeleccionadoAgenda);
    this.CargarResumenPagosPuntoVentaPanaderiaPromesaDeDios(this.AnioSeleccionadoPuntoVentaPanaderiaPromesaDeDios);
    this.CargarResumenPagosSastreriaDemoOficial(this.AnioSeleccionadoSastreriaDemoOficial);

    this.CargarInformacionBdChocosDeLaAbuela();
    this.CargarInformacionBdConstructoraMorgan();
    this.CargarInformacionBdVendedor();
    // this.CargarInformacionBdAjachelTravelAgency();
    this.CargarInformacionBdCevicheriaCastillo();
    // this.CargarInformacionBdRestauranteElBistro();
    this.CargarInformacionBdSastreriaConfeccionesCreateli();
    this.CargarInformacionBdSastreriaAbarroteriaElAmanecer();
    this.CargarInformacionBdSastreriaFerreteriaLaBendicionOficial();
    this.CargarInformacionBdAgenda();
    this.CargarInformacionBdPuntoVentaPanaderiaPromesaDeDios();
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
      this.VisorConstructoraMorgan =
      this.VisorAjachelTravelAgency =
      this.VisorCevicheriaCastillo =
      this.VisorRestauranteElBistro =
      this.VisorSastreriaConfeccionesCreateli =
      this.VisorSastreriaAbarroteriaElAmanecer =
      this.VisorSastreriaFerreteriaLaBendicion =
      this.VisorSastreriaFerreteriaLaBendicionOficial =
      this.VisorAgenda =
      this.VisorPuntoVentaPanaderiaPromesaDeDios =
      this.VisorVendedor =
      this.VisorSastreriaDemoOficial =
      this.VisorMaestro;
  }
  // ********************** C.A.R.R.I.T.O--W.E.B **********************
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

  //CEVICHERIA CASTILLO
  CargarResumenPagosCevicheriaCastillo(anio: number) {
    this.PagoServicioCevicheriaCastillo.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosCevicheriaCastillo = Respuesta.data;
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
  CargarInformacionBdCevicheriaCastillo() {
    this.InformacionBd_ServicioCevicheriaCastillo.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdCevicheriaCastillo = Respuesta.data;
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
  // ********************** S.A.S.T.R.E.R.I.A.S ***********************
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
  //SASTRERIA FERRETERIA LA BENDICION OFICIAL
  CargarResumenPagosSastreriaFerreteriaLaBendicionOficial(anio: number) {
    this.PagoServicioSastreriaFerreteriaLaBendicionOficial.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosSastreriaFerreteriaLaBendicionOficial = Respuesta.data;
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
  CargarInformacionBdSastreriaFerreteriaLaBendicionOficial() {
    this.InformacionBd_ServicioSastreriaFerreteriaLaBendicionOficial.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdSastreriaFerreteriaLaBendicionOficial = Respuesta.data;
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

  // ********************** A.G.E.N.D.A ******************************* 
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
  // ********************** P.U.N.T.O.V.E.N.T.A ***********************
  //PUNTO VENTA PANADERIA PROMESA DE DIOS
  CargarResumenPagosPuntoVentaPanaderiaPromesaDeDios(anio: number) {
    this.PagoServicioPuntoVentaPanaderiaPromesaDeDios.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosPuntoVentaPanaderiaPromesaDeDios = Respuesta.data;
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
  CargarInformacionBdPuntoVentaPanaderiaPromesaDeDios() {
    this.InformacionBd_ServicioPuntoVentaPanaderiaPromesaDeDios.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdPuntoVentaPanaderiaPromesaDeDios = Respuesta.data;
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
  // ********************** D.E.M.O *********************************** 
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
