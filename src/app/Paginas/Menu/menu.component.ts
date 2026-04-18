import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entorno } from '../../Entornos/Entorno';

import { PagoServicioPromesaDeDios } from '../../Servicios/PromesaDeDios/PagoServicio';
import { PagoServicioFamilyShop } from '../../Servicios/FamilyShop/PagoServicio';
import { PagoServicioChocosDeLaAbuela } from '../../Servicios/ChocosDeLaAbuela/PagoServicio';
import { PagoServicioRestauranteElTule } from '../../Servicios/RestauranteElTule/PagoServicio';
import { PagoServicioCorazonTipico } from '../../Servicios/CorazonTipico/PagoServicio';
import { PagoServicioConstructoraMorgan } from '../../Servicios/ConstructoraMorgan/PagoServicio';
import { PagoServicioVendedor } from '../../Servicios/Vendedor/PagoServicio';
import { PagoServicioAjachelTravelAgency } from '../../Servicios/AjachelTravelAgency/PagoServicio';
import { PagoServicioRestauranteElBistro } from '../../Servicios/RestauranteElBistro/PagoServicio';

import { InformacionBd_ServicioPromesaDeDios } from '../../Servicios/PromesaDeDios/InformacionBd_Servicio';
import { InformacionBd_ServicioFamilyShop } from '../../Servicios/FamilyShop/InformacionBd_Servicio';
import { InformacionBd_ServicioChocosDeLaAbuela } from '../../Servicios/ChocosDeLaAbuela/InformacionBd_Servicio';
import { InformacionBd_ServicioRestauranteElTule } from '../../Servicios/RestauranteElTule/InformacionBd_Servicio';
import { InformacionBd_ServicioCorazonTipico } from '../../Servicios/CorazonTipico/InformacionBd_Servicio';
import { InformacionBd_ServicioConstructoraMorgan } from '../../Servicios/ConstructoraMorgan/InformacionBd_Servicio';
import { InformacionBd_ServicioVendedor } from '../../Servicios/Vendedor/InformacionBd_Servicio';
import { InformacionBd_ServicioAjachelTravelAgency } from '../../Servicios/AjachelTravelAgency/InformacionBd_Servicio';
import { InformacionBd_ServicioRestauranteElBistro } from '../../Servicios/RestauranteElBistro/InformacionBd_Servicio';


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
  //PROMESA DE DIOS
  NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
  LogoEmpresaPromesaDeDios: string = Entorno.LogoPromesaDeDios;
  ResumenPagosPromesaDeDios: any = null;
  AnioSeleccionadoPromesaDeDios = new Date().getFullYear();
  PaginaPromesaDeDios: number = 0;
  InformacionBdPromesaDeDios: any = null;
  //FAMILY SHOP
  NombreEmpresaFamilyShop: string = Entorno.NombreEmpresaFamilyShop;
  LogoEmpresaFamilyShop: string = Entorno.LogoFamilyShop;
  ResumenPagosFamilyShop: any = null;
  AnioSeleccionadoFamilyShop = new Date().getFullYear();
  PaginaFamilyShop: number = 0;
  InformacionBdFamilyShop: any = null;
  //CHOCOS DE LA ABUELA
  NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
  LogoEmpresaChocosDeLaAbuela: string = Entorno.LogoChocosDeLaAbuela;
  ResumenPagosChocosDeLaAbuela: any = null;
  AnioSeleccionadoChocosDeLaAbuela = new Date().getFullYear();
  PaginaChocosDeLaAbuela: number = 0;
  InformacionBdChocosDeLaAbuela: any = null;
  //RESTAURANTE EL TULE
  NombreEmpresaRestauranteElTule: string = Entorno.NombreEmpresaRestauranteElTule;
  LogoEmpresaRestauranteElTule: string = Entorno.LogoRestauranteElTule;
  ResumenPagosRestauranteElTule: any = null;
  AnioSeleccionadoRestauranteElTule = new Date().getFullYear();
  PaginaRestauranteElTule: number = 0;
  InformacionBdRestauranteElTule: any = null;
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

  // Estados de visores individuales
  VisorPromesaDeDios = false;
  VisorFamilyShop = false;
  VisorChocosDeLaAbuela = false;
  VisorRestauranteElTule = false;
  VisorCorazonTipico = false;
  VisorConstructoraMorgan = false;
  VisorVendedor = false;
  VisorAjachelTravelAgency = false;
  VisorRestauranteElBistro = false;

  // Switch maestro
  VisorMaestro = false;

  constructor(private router: Router,
    private PagoServicioPromesaDeDios: PagoServicioPromesaDeDios,
    private PagoServicioFamilyShop: PagoServicioFamilyShop,
    private PagoServicioChocosDeLaAbuela: PagoServicioChocosDeLaAbuela,
    private PagoServicioRestauranteElTule: PagoServicioRestauranteElTule,
    private PagoServicioCorazonTipico: PagoServicioCorazonTipico,
    private PagoServicioConstructoraMorgan: PagoServicioConstructoraMorgan,
    private PagoServicioVendedor: PagoServicioVendedor,
    private PagoServicioAjachelTravelAgency: PagoServicioAjachelTravelAgency,
    private PagoServicioRestauranteElBistro: PagoServicioRestauranteElBistro,

    private InformacionBd_ServicioPromesaDeDios: InformacionBd_ServicioPromesaDeDios,
    private InformacionBd_ServicioFamilyShop: InformacionBd_ServicioFamilyShop,
    private InformacionBd_ServicioChocosDeLaAbuela: InformacionBd_ServicioChocosDeLaAbuela,
    private InformacionBd_ServicioRestauranteElTule: InformacionBd_ServicioRestauranteElTule,
    private InformacionBd_ServicioVendedor: InformacionBd_ServicioVendedor,
    private InformacionBd_ServicioCorazonTipico: InformacionBd_ServicioCorazonTipico,
    private InformacionBd_ServicioConstructoraMorgan: InformacionBd_ServicioConstructoraMorgan,
    private InformacionBd_ServicioAjachelTravelAgency: InformacionBd_ServicioAjachelTravelAgency,
    private InformacionBd_ServicioRestauranteElBistro: InformacionBd_ServicioRestauranteElBistro,
    private Alerta: AlertaServicio
  ) { }
  ngOnInit() {
    // this.CargarResumenPagosPromesaDeDios(this.AnioSeleccionadoPromesaDeDios);
    //this.CargarResumenPagosFamilyShop(this.AnioSeleccionadoFamilyShop);
    this.CargarResumenPagosChocosDeLaAbuela(this.AnioSeleccionadoChocosDeLaAbuela);
    //this.CargarResumenPagosRestauranteElTule(this.AnioSeleccionadoRestauranteElTule);
    this.CargarResumenPagosCorazonTipico(this.AnioSeleccionadoCorazonTipico);
    this.CargarResumenPagosConstructoraMorgan(this.AnioSeleccionadoConstructoraMorgan);
    this.CargarResumenPagosVendedor(this.AnioSeleccionadoVendedor);
    this.CargarResumenPagosAjachelTravelAgency(this.AnioSeleccionadoAjachelTravelAgency);
    this.CargarResumenPagosRestauranteElBistro(this.AnioSeleccionadoRestauranteElBistro);

    // this.CargarInformacionBdPromesaDeDios();
    //this.CargarInformacionBdFamilyShop();
    this.CargarInformacionBdChocosDeLaAbuela();
    //this.CargarInformacionBdRestauranteElTule();
    this.CargarInformacionBdCorazonTipico();
    this.CargarInformacionBdConstructoraMorgan();
    this.CargarInformacionBdVendedor();
    this.CargarInformacionBdAjachelTravelAgency();
    this.CargarInformacionBdRestauranteElBistro();
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
      this.VisorFamilyShop =
      this.VisorChocosDeLaAbuela =
      this.VisorRestauranteElTule =
      this.VisorCorazonTipico =
      this.VisorConstructoraMorgan =
      this.VisorAjachelTravelAgency =
      this.VisorRestauranteElBistro =
      this.VisorVendedor = this.VisorMaestro;
  }
  //PROMESA DE DIOS
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
    this.InformacionBd_ServicioPromesaDeDios.ObtenerBd().subscribe({
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
  //FAMILY SHOP
  CargarResumenPagosFamilyShop(anio: number) {
    this.PagoServicioFamilyShop.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosFamilyShop = Respuesta.data;
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
  CargarInformacionBdFamilyShop() {
    this.InformacionBd_ServicioFamilyShop.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdFamilyShop = Respuesta.data;
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
  //RESTAURANTE EL TULE
  CargarResumenPagosRestauranteElTule(anio: number) {
    this.PagoServicioRestauranteElTule.ObtenerResumenGeneralPagos(anio).subscribe({
      next: (Respuesta) => {
        this.ResumenPagosRestauranteElTule = Respuesta.data;
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
  CargarInformacionBdRestauranteElTule() {
    this.InformacionBd_ServicioRestauranteElTule.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdRestauranteElTule = Respuesta.data;
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
}
