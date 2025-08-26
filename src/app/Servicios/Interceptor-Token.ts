import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginServicioPromesaDeDios } from './PromesaDeDios/Login';
import { LoginServicioFamilyShop } from './FamilyShop/Login';
import { LoginServicioCafeJuanAna } from './CafeJuanAna/Login';
import { LoginServicioDulceTentacion } from './DulceTentacion/Login';
import { LoginServicioRestauranteKaski } from './RestauranteKaski/Login';
import { LoginServicioVendedor } from './Vendedor/Login';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Entorno } from '../../app/Entornos/Entorno';

export const AutorizacionInterceptor: HttpInterceptorFn = (Solicitud, Siguiente) => {
  const LoginPromesaDeDios = inject(LoginServicioPromesaDeDios);
  const LoginFamilyShop = inject(LoginServicioFamilyShop);
  const LoginCafeJuanAna = inject(LoginServicioCafeJuanAna);
  const LoginDulceTentacion = inject(LoginServicioDulceTentacion);
  const LoginRestauranteKaski = inject(LoginServicioRestauranteKaski);
  const LoginVendedor = inject(LoginServicioVendedor);

  const router = inject(Router);

  let token: string | null = null;
  const url = Solicitud.url;

  // Verifica hacia qué API va la solicitud
  if (url.includes(Entorno.ApiUrlPromesaDeDios)) {
    token = LoginPromesaDeDios.ObtenerToken();
  }
  else if (url.includes(Entorno.ApiUrlFamilyShop)) {
    token = LoginFamilyShop.ObtenerToken();
  }
  else if (url.includes(Entorno.ApiUrlCafeJuanAna)) {
    token = LoginCafeJuanAna.ObtenerToken();
  }
  else if (url.includes(Entorno.ApiUrlDulceTentacion)) {
    token = LoginDulceTentacion.ObtenerToken();
  }
  else if (url.includes(Entorno.ApiUrlRestauranteKaski)) {
    token = LoginRestauranteKaski.ObtenerToken();
  }
  else if (url.includes(Entorno.ApiUrlVendedor)) {
    token = LoginVendedor.ObtenerToken();
  }


  // Si hay token, adjúntalo
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
        if (url.includes(Entorno.ApiUrlPromesaDeDios)) {
          LoginPromesaDeDios.EliminarToken();
          router.navigate(['/menu']);
        } else if (url.includes(Entorno.ApiUrlFamilyShop)) {
          LoginFamilyShop.EliminarToken();
          router.navigate(['/menu']);
        } else if (url.includes(Entorno.ApiUrlCafeJuanAna)) {
          LoginCafeJuanAna.EliminarToken();
          router.navigate(['/menu']);
        } else if (url.includes(Entorno.ApiUrlDulceTentacion)) {
          LoginDulceTentacion.EliminarToken();
          router.navigate(['/menu']);
        } else if (url.includes(Entorno.ApiUrlRestauranteKaski)) {
          LoginRestauranteKaski.EliminarToken();
          router.navigate(['/menu']);
        } else if (url.includes(Entorno.ApiUrlVendedor)) {
          LoginVendedor.EliminarToken();
          router.navigate(['/menu']);
        }
      }
      return throwError(() => error);
    })
  );
};
