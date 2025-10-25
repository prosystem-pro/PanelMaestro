import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entorno } from '../../Entornos/Entorno';

import { PagoServicioPromesaDeDios } from '../../Servicios/PromesaDeDios/PagoServicio';
import { PagoServicioFamilyShop } from '../../Servicios/FamilyShop/PagoServicio';
import { PagoServicioCafeJuanAna } from '../../Servicios/CafeJuanAna/PagoServicio';
import { PagoServicioChocosDeLaAbuela } from '../../Servicios/ChocosDeLaAbuela/PagoServicio';
import { PagoServicioRestauranteElTule } from '../../Servicios/RestauranteElTule/PagoServicio';
import { PagoServicioCorazonTipico } from '../../Servicios/CorazonTipico/PagoServicio';
import { PagoServicioVendedor } from '../../Servicios/Vendedor/PagoServicio';

import { InformacionBd_ServicioPromesaDeDios } from '../../Servicios/PromesaDeDios/InformacionBd_Servicio';
import { InformacionBd_ServicioFamilyShop } from '../../Servicios/FamilyShop/InformacionBd_Servicio';
import { InformacionBd_ServicioCafeJuanAna } from '../../Servicios/CafeJuanAna/InformacionBd_Servicio';
import { InformacionBd_ServicioChocosDeLaAbuela } from '../../Servicios/ChocosDeLaAbuela/InformacionBd_Servicio';
import { InformacionBd_ServicioRestauranteElTule } from '../../Servicios/RestauranteElTule/InformacionBd_Servicio';
import { InformacionBd_ServicioCorazonTipico } from '../../Servicios/CorazonTipico/InformacionBd_Servicio';
import { InformacionBd_ServicioVendedor } from '../../Servicios/Vendedor/InformacionBd_Servicio';

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
  //CAFE JUAN ANA
  NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;
  LogoEmpresaCafeJuanAna: string = Entorno.LogoCafeJuanAna;
  ResumenPagosCafeJuanAna: any = null;
  AnioSeleccionadoCafeJuanAna = new Date().getFullYear();
  PaginaCafeJuanAna: number = 0;
  InformacionBdCafeJuanAna: any = null;
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
  //VENDEDOR
  NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
  LogoEmpresaVendedor: string = Entorno.LogoVendedor;
  ResumenPagosVendedor: any = null;
  AnioSeleccionadoVendedor = new Date().getFullYear();
  PaginaVendedor: number = 0;
  InformacionBdVendedor: any = null;

  // Estados de visores individuales
  VisorPromesaDeDios = false;
  VisorFamilyShop = false;
  VisorCafeJuanAna = false;
  VisorChocosDeLaAbuela = false;
  VisorRestauranteElTule = false;
  VisorCorazonTipico = false;
  VisorVendedor = false;

  // Switch maestro
  VisorMaestro = false;

  constructor(private router: Router,
    private PagoServicioPromesaDeDios: PagoServicioPromesaDeDios,
    private PagoServicioFamilyShop: PagoServicioFamilyShop,
    private PagoServicioCafeJuanAna: PagoServicioCafeJuanAna,
    private PagoServicioChocosDeLaAbuela: PagoServicioChocosDeLaAbuela,
    private PagoServicioRestauranteElTule: PagoServicioRestauranteElTule,
    private PagoServicioCorazonTipico: PagoServicioCorazonTipico,
    private PagoServicioVendedor: PagoServicioVendedor,

    private InformacionBd_ServicioPromesaDeDios: InformacionBd_ServicioPromesaDeDios,
    private InformacionBd_ServicioFamilyShop: InformacionBd_ServicioFamilyShop,
    private InformacionBd_ServicioCafeJuanAna: InformacionBd_ServicioCafeJuanAna,
    private InformacionBd_ServicioChocosDeLaAbuela: InformacionBd_ServicioChocosDeLaAbuela,
    private InformacionBd_ServicioRestauranteElTule: InformacionBd_ServicioRestauranteElTule,
    private InformacionBd_ServicioVendedor: InformacionBd_ServicioVendedor,
    private InformacionBd_ServicioCorazonTipico: InformacionBd_ServicioCorazonTipico,
    private Alerta: AlertaServicio
  ) { }
  ngOnInit() {
    // this.CargarResumenPagosPromesaDeDios(this.AnioSeleccionadoPromesaDeDios);
    this.CargarResumenPagosFamilyShop(this.AnioSeleccionadoFamilyShop);
    this.CargarResumenPagosCafeJuanAna(this.AnioSeleccionadoCafeJuanAna);
    this.CargarResumenPagosChocosDeLaAbuela(this.AnioSeleccionadoChocosDeLaAbuela);
    this.CargarResumenPagosRestauranteElTule(this.AnioSeleccionadoRestauranteElTule);
    this.CargarResumenPagosCorazonTipico(this.AnioSeleccionadoCorazonTipico);
    this.CargarResumenPagosVendedor(this.AnioSeleccionadoVendedor);

    // this.CargarInformacionBdPromesaDeDios();
    this.CargarInformacionBdFamilyShop();
    this.CargarInformacionBdCafeJuanAna();
    this.CargarInformacionBdChocosDeLaAbuela();
    this.CargarInformacionBdRestauranteElTule();
    this.CargarInformacionBdCorazonTipico();
    this.CargarInformacionBdVendedor();
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
      this.VisorCafeJuanAna =
      this.VisorChocosDeLaAbuela =
      this.VisorRestauranteElTule =
      this.VisorCorazonTipico =
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
  //CAFE JUAN ANA
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
  CargarInformacionBdCafeJuanAna() {
    this.InformacionBd_ServicioCafeJuanAna.ObtenerBd().subscribe({
      next: (Respuesta) => {
        this.InformacionBdCafeJuanAna = Respuesta.data;
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
    //PROMESA DE DIOS
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
}
