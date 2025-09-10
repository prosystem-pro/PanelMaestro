import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginServicioPromesaDeDios } from '../Servicios/PromesaDeDios/Login';
import { LoginServicioFamilyShop } from '../Servicios/FamilyShop/Login';
import { LoginServicioCafeJuanAna } from '../Servicios/CafeJuanAna/Login';
import { LoginServicioChocosDeLaAbuela } from '../Servicios/ChocosDeLaAbuela/Login';
import { LoginServicioRestauranteElTule } from '../Servicios/RestauranteElTule/Login';
import { LoginServicioVendedor } from '../Servicios/Vendedor/Login';
import { Entorno } from '../Entornos/Entorno';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionRuta implements CanActivate {

  constructor(private LoginPromesaDeDios: LoginServicioPromesaDeDios,
    private LoginFamilyShop: LoginServicioFamilyShop,
    private LoginCafeJuanAna: LoginServicioCafeJuanAna,
    private LoginChocosDeLaAbuela: LoginServicioChocosDeLaAbuela,
    private LoginRestauranteElTule: LoginServicioRestauranteElTule,
    private LoginVendedor: LoginServicioVendedor,
    private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = state.url;
    const NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
    const NombreEmpresaFamilyShop: string = Entorno.NombreEmpresaFamilyShop;
    const NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;
    const NombreEmpresaChocosDeLaAbuela: string = Entorno.NombreEmpresaChocosDeLaAbuela;
    const NombreEmpresaRestauranteElTule: string = Entorno.NombreEmpresaRestauranteElTule;
    const NombreEmpresaVendedor: string = Entorno.NombreEmpresaVendedor;
    // Detectamos qué servicio de login usar
    if (url.includes(`/${NombreEmpresaPromesaDeDios}`)) {
      if (this.LoginPromesaDeDios.ValidarToken()) {
        return true;
      } else {
        this.LoginPromesaDeDios.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaFamilyShop}`)) {
      if (this.LoginFamilyShop.ValidarToken()) {
        return true;
      } else {
        this.LoginFamilyShop.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaCafeJuanAna}`)) {
      if (this.LoginCafeJuanAna.ValidarToken()) {
        return true;
      } else {
        this.LoginCafeJuanAna.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaChocosDeLaAbuela}`)) {
      if (this.LoginChocosDeLaAbuela.ValidarToken()) {
        return true;
      } else {
        this.LoginChocosDeLaAbuela.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }
    if (url.includes(`/${NombreEmpresaRestauranteElTule}`)) {
      if (this.LoginRestauranteElTule.ValidarToken()) {
        return true;
      } else {
        this.LoginRestauranteElTule.EliminarToken();
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

    console.warn('No coincide con ninguna API conocida, redirigiendo a menú');
    this.router.navigate(['/menu']);
    return false;
  }
}
