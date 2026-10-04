import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginServicioChocosDeLaAbuela } from '../Servicios/ChocosDeLaAbuela/Login';
import { LoginServicioConstructoraMorgan } from '../Servicios/ConstructoraMorgan/Login';
import { LoginServicioVendedor } from '../Servicios/Vendedor/Login';
import { LoginServicioAjachelTravelAgency } from '../Servicios/AjachelTravelAgency/Login';
import { LoginServicioCevicheriaCastillo } from '../Servicios/CevicheriaCastillo/Login';
import { LoginServicioRestauranteElBistro } from '../Servicios/RestauranteElBistro/Login';
import { LoginServicioSastreriaConfeccionesCreateli } from '../Servicios/SastreriaConfeccionesCreateli/Login';
import { LoginServicioSastreriaAbarroteriaElAmanecer } from '../Servicios/SastreriaAbarroteriaElAmanecer/Login';
import { LoginServicioSastreriaFerreteriaLaBendicionOficial } from '../Servicios/SastreriaFerreteriaLaBendicionOficial/Login';
import { LoginServicioSastreriaMototienda } from '../Servicios/SastreriaMototienda/Login';
import { LoginServicioAgenda } from '../Servicios/Agenda/Login';
import { LoginServicioPuntoVentaPanaderiaPromesaDeDios } from '../Servicios/PuntoVentaPanaderiaPromesaDeDios/Login';
import { LoginServicioSastreriaDemoOficial } from '../Servicios/SastreriaDemoOficial/Login';
import { Entorno } from '../Entornos/Entorno';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionRuta implements CanActivate {

  constructor(
    private LoginChocosDeLaAbuela: LoginServicioChocosDeLaAbuela,
    private LoginConstructoraMorgan: LoginServicioConstructoraMorgan,
    private LoginVendedor: LoginServicioVendedor,
    private LoginAjachelTravelAgency: LoginServicioAjachelTravelAgency,
    private LoginCevicheriaCastillo: LoginServicioCevicheriaCastillo,
    private LoginRestauranteElBistro: LoginServicioRestauranteElBistro,
    private LoginSastreriaConfeccionesCreateli: LoginServicioSastreriaConfeccionesCreateli,
    private LoginSastreriaAbarroteriaElAmanecer: LoginServicioSastreriaAbarroteriaElAmanecer,
    private LoginSastreriaFerreteriaLaBendicionOficial: LoginServicioSastreriaFerreteriaLaBendicionOficial,
    private LoginSastreriaMototienda: LoginServicioSastreriaMototienda,
    private LoginAgenda: LoginServicioAgenda,
    private LoginPuntoVentaPanaderiaPromesaDeDios: LoginServicioPuntoVentaPanaderiaPromesaDeDios,
    private LoginSastreriaDemoOficial: LoginServicioSastreriaDemoOficial,
    private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = state.url;
    const NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
    const NombreEmpresaConstructoraMorgan: string = Entorno.NombreEmpresaConstructoraMorgan;
    const NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
    const NombreEmpresaAjachelTravelAgency: string = Entorno.NombreEmpresaAjachelTravelAgency;
    const NombreEmpresaCevicheriaCastillo: string = Entorno.NombreEmpresaCevicheriaCastillo;
    const NombreEmpresaRestauranteElBistro: string = Entorno.NombreEmpresaRestauranteElBistro;
    const NombreEmpresaSastreriaConfeccionesCreateli: string = Entorno.NombreEmpresaSastreriaConfeccionesCreateli;
    const NombreEmpresaSastreriaAbarroteriaElAmanecer: string = Entorno.NombreEmpresaSastreriaAbarroteriaElAmanecer;
    const NombreEmpresaSastreriaFerreteriaLaBendicionOficial: string = Entorno.NombreEmpresaSastreriaFerreteriaLaBendicionOficial;
    const NombreEmpresaSastreriaMototienda: string = Entorno.NombreEmpresaSastreriaMototienda;
    const NombreEmpresaAgenda: string = Entorno.NombreEmpresaAgenda;
    const NombreEmpresaPuntoVentaPanaderiaPromesaDeDios: string = Entorno.NombreEmpresaPuntoVentaPanaderiaPromesaDeDios;
    const NombreEmpresaSastreriaDemoOficial: string = Entorno.NombreEmpresaSastreriaDemoOficial;
    // Detectamos qué servicio de login usar
    if (url.includes(`/${NombreEmpresaChocosDeLaAbuela}`)) {
      if (this.LoginChocosDeLaAbuela.ValidarToken()) {
        return true;
      } else {
        this.LoginChocosDeLaAbuela.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaConstructoraMorgan}`)) {
      if (this.LoginConstructoraMorgan.ValidarToken()) {
        return true;
      } else {
        this.LoginConstructoraMorgan.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaAjachelTravelAgency}`)) {
      if (this.LoginAjachelTravelAgency.ValidarToken()) {
        return true;
      } else {
        this.LoginAjachelTravelAgency.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaCevicheriaCastillo}`)) {
      if (this.LoginCevicheriaCastillo.ValidarToken()) {
        return true;
      } else {
        this.LoginCevicheriaCastillo.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaRestauranteElBistro}`)) {
      if (this.LoginRestauranteElBistro.ValidarToken()) {
        return true;
      } else {
        this.LoginRestauranteElBistro.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaSastreriaConfeccionesCreateli}`)) {
      if (this.LoginSastreriaConfeccionesCreateli.ValidarToken()) {
        return true;
      } else {
        this.LoginSastreriaConfeccionesCreateli.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaSastreriaAbarroteriaElAmanecer}`)) {
      if (this.LoginSastreriaAbarroteriaElAmanecer.ValidarToken()) {
        return true;
      } else {
        this.LoginSastreriaAbarroteriaElAmanecer.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaSastreriaFerreteriaLaBendicionOficial}`)) {
      if (this.LoginSastreriaFerreteriaLaBendicionOficial.ValidarToken()) {
        return true;
      } else {
        this.LoginSastreriaFerreteriaLaBendicionOficial.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaSastreriaMototienda}`)) {
      if (this.LoginSastreriaMototienda.ValidarToken()) {
        return true;
      } else {
        this.LoginSastreriaMototienda.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaAgenda}`)) {
      if (this.LoginAgenda.ValidarToken()) {
        return true;
      } else {
        this.LoginAgenda.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaPuntoVentaPanaderiaPromesaDeDios}`)) {
      if (this.LoginPuntoVentaPanaderiaPromesaDeDios.ValidarToken()) {
        return true;
      } else {
        this.LoginPuntoVentaPanaderiaPromesaDeDios.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaVendedor}`)) {
      if (this.LoginVendedor.ValidarToken()) {
        return true;
      } else {
        this.LoginVendedor.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaSastreriaDemoOficial}`)) {
      if (this.LoginSastreriaDemoOficial.ValidarToken()) {
        return true;
      } else {
        this.LoginSastreriaDemoOficial.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }

    console.warn('No coincide con ninguna API conocida, redirigiendo a menú');
    this.router.navigate(['/menu']);
    return false;
  }
}
