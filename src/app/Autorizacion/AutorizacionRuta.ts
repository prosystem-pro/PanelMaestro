import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginServicioPromesaDeDios } from '../Servicios/PromesaDeDios/Login';
import { LoginServicioCafeJuanAna } from '../Servicios/CafeJuanAna/Login';
import { Entorno } from '../Entornos/Entorno';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionRuta implements CanActivate {

  constructor(private LoginPromesaDeDios: LoginServicioPromesaDeDios,
    private LoginCafeJuanAna: LoginServicioCafeJuanAna,
    private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = state.url;
    const NombreEmpresaPromesaDeDios: string = Entorno.NombreEmpresaPromesaDeDios;
    const NombreEmpresaCafeJuanAna: string = Entorno.NombreEmpresaCafeJuanAna;
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

    if (url.includes(`/${NombreEmpresaCafeJuanAna}`)) {
      if (this.LoginCafeJuanAna.ValidarToken()) {
        return true;
      } else {
        this.LoginCafeJuanAna.EliminarToken();
        this.router.navigate(['/menu']);
        return false;
      }
    }

    console.warn('No coincide con ninguna API conocida, redirigiendo a menú');
    this.router.navigate(['/menu']);
    return false;
  }



}
