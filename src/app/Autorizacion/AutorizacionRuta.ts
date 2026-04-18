import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginServicioChocosDeLaAbuela } from '../Servicios/ChocosDeLaAbuela/Login';
import { LoginServicioCorazonTipico } from '../Servicios/CorazonTipico/Login';
import { LoginServicioConstructoraMorgan } from '../Servicios/ConstructoraMorgan/Login';
import { LoginServicioVendedor } from '../Servicios/Vendedor/Login';
import { LoginServicioAjachelTravelAgency } from '../Servicios/AjachelTravelAgency/Login';
import { LoginServicioRestauranteElBistro } from '../Servicios/RestauranteElBistro/Login';
import { LoginServicioSastreriaConfeccionesCreateli } from '../Servicios/SastreriaConfeccionesCreateli/Login';
import { Entorno } from '../Entornos/Entorno';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionRuta implements CanActivate {

  constructor(
    private LoginChocosDeLaAbuela: LoginServicioChocosDeLaAbuela,
    private LoginCorazonTipico: LoginServicioCorazonTipico,
    private LoginConstructoraMorgan: LoginServicioConstructoraMorgan,
    private LoginVendedor: LoginServicioVendedor,
    private LoginAjachelTravelAgency: LoginServicioAjachelTravelAgency,
    private LoginRestauranteElBistro: LoginServicioRestauranteElBistro,
    private LoginSastreriaConfeccionesCreateli: LoginServicioSastreriaConfeccionesCreateli,
    private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = state.url;
    const NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
    const NombreEmpresaCorazonTipico: string = Entorno.NombreEmpresaCorazonTipico;
    const NombreEmpresaConstructoraMorgan: string = Entorno.NombreEmpresaConstructoraMorgan;
    const NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
    const NombreEmpresaAjachelTravelAgency: string = Entorno.NombreEmpresaAjachelTravelAgency;
    const NombreEmpresaRestauranteElBistro: string = Entorno.NombreEmpresaRestauranteElBistro;
    const NombreEmpresaSastreriaConfeccionesCreateli: string = Entorno.NombreEmpresaSastreriaConfeccionesCreateli;
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
    if (url.includes(`/${NombreEmpresaCorazonTipico}`)) {
      if (this.LoginCorazonTipico.ValidarToken()) {
        return true;
      } else {
        this.LoginCorazonTipico.EliminarToken();
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
    if (url.includes(`/${NombreEmpresaVendedor}`)) {
      if (this.LoginVendedor.ValidarToken()) {
        return true;
      } else {
        this.LoginVendedor.EliminarToken();
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

    console.warn('No coincide con ninguna API conocida, redirigiendo a menú');
    this.router.navigate(['/menu']);
    return false;
  }
}
