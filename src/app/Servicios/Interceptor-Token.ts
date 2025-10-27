import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginServicioPromesaDeDios } from './PromesaDeDios/Login';
import { LoginServicioFamilyShop } from './FamilyShop/Login';
import { LoginServicioCafeJuanAna } from './CafeJuanAna/Login';
import { LoginServicioChocosDeLaAbuela } from './ChocosDeLaAbuela/Login';
import { LoginServicioRestauranteElTule } from './RestauranteElTule/Login';
import { LoginServicioCorazonTipico } from './CorazonTipico/Login';
import { LoginServicioConstructoraMorgan } from './ConstructoraMorgan/Login';
import { LoginServicioVendedor } from './Vendedor/Login';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Entorno } from '../../app/Entornos/Entorno';

export const AutorizacionInterceptor: HttpInterceptorFn = (Solicitud, Siguiente) => {
  const LoginPromesaDeDios = inject(LoginServicioPromesaDeDios);
  const LoginFamilyShop = inject(LoginServicioFamilyShop);
  const LoginCafeJuanAna = inject(LoginServicioCafeJuanAna);
  const LoginChocosDeLaAbuela = inject(LoginServicioChocosDeLaAbuela);
  const LoginRestauranteElTule = inject(LoginServicioRestauranteElTule);
  const LoginCorazonTipico = inject(LoginServicioCorazonTipico);
  const LoginConstructoraMorgan = inject(LoginServicioConstructoraMorgan);
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
  else if (url.includes(Entorno.ApiUrlChocosDeLaAbuela)) {
    token = LoginChocosDeLaAbuela.ObtenerToken();
  }
  else if (url.includes(Entorno.ApiUrlCorazonTipico)) {
    token = LoginCorazonTipico.ObtenerToken();
  }
  else if (url.includes(Entorno.ApiUrlVendedor)) {
    token = LoginVendedor.ObtenerToken();
  }
  else if (url.includes(Entorno.ApiUrlRestauranteElTule)) {
    token = LoginRestauranteElTule.ObtenerToken();
  }
  else if (url.includes(Entorno.ApiUrlConstructoraMorgan)) {
    token = LoginConstructoraMorgan.ObtenerToken();
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
        } else if (url.includes(Entorno.ApiUrlChocosDeLaAbuela)) {
          LoginChocosDeLaAbuela.EliminarToken();
          router.navigate(['/menu']);
        } else if (url.includes(Entorno.ApiUrlRestauranteElTule)) {
          LoginRestauranteElTule.EliminarToken();
          router.navigate(['/menu']);
        } else if (url.includes(Entorno.ApiUrlCorazonTipico)) {
          LoginCorazonTipico.EliminarToken();
          router.navigate(['/menu']);
        } else if (url.includes(Entorno.ApiUrlVendedor)) {
          LoginVendedor.EliminarToken();
          router.navigate(['/menu']);
        } else if (url.includes(Entorno.ApiUrlConstructoraMorgan)) {
          LoginConstructoraMorgan.EliminarToken();
          router.navigate(['/menu']);
        }
      }
      return throwError(() => error);
    })
  );
};
