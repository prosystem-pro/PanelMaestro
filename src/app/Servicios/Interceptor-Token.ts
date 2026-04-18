import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginServicioChocosDeLaAbuela } from './ChocosDeLaAbuela/Login';
import { LoginServicioCorazonTipico } from './CorazonTipico/Login';
import { LoginServicioConstructoraMorgan } from './ConstructoraMorgan/Login';
import { LoginServicioVendedor } from './Vendedor/Login';
import { LoginServicioAjachelTravelAgency } from './AjachelTravelAgency/Login';
import { LoginServicioRestauranteElBistro } from './RestauranteElBistro/Login';
import { LoginServicioSastreriaConfeccionesCreateli } from './SastreriaConfeccionesCreateli/Login';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Entorno } from '../../app/Entornos/Entorno';

export const AutorizacionInterceptor: HttpInterceptorFn = (Solicitud, Siguiente) => {

  const router = inject(Router);

  const servicios = [
    { url: Entorno.ApiUrlChocosDeLaAbuela, login: inject(LoginServicioChocosDeLaAbuela) },
    { url: Entorno.ApiUrlCorazonTipico, login: inject(LoginServicioCorazonTipico) },
    { url: Entorno.ApiUrlConstructoraMorgan, login: inject(LoginServicioConstructoraMorgan) },
    { url: Entorno.ApiUrlVendedor, login: inject(LoginServicioVendedor) },
    { url: Entorno.ApiUrlAjachelTravelAgency, login: inject(LoginServicioAjachelTravelAgency) },
    { url: Entorno.ApiUrlRestauranteElBistro, login: inject(LoginServicioRestauranteElBistro) },
    { url: Entorno.ApiUrlSastreriaConfeccionesCreateli, login: inject(LoginServicioSastreriaConfeccionesCreateli) }
  ];

  const url = Solicitud.url;

  // Buscar el servicio correspondiente
  const servicio = servicios.find(s => url.includes(s.url));

  // Obtener token
  const token = servicio?.login.ObtenerToken();

  // Adjuntar token si existe
  if (token) {
    Solicitud = Solicitud.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return Siguiente(Solicitud).pipe(

    catchError(error => {

      if (error.status === 401) {

        console.warn('Token expirado o inválido');

        if (servicio) {
          servicio.login.EliminarToken();

          if (router.url !== '/menu') {
            router.navigate(['/menu']);
          }
        }

      }

      return throwError(() => error);

    })

  );
};