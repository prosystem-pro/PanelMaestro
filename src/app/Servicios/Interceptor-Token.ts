import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginServicioPromesaDeDios } from './PromesaDeDios/Login';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Entorno } from '../../app/Entornos/Entorno';

export const AutorizacionInterceptor: HttpInterceptorFn = (Solicitud, Siguiente) => {
  const LoginPromesaDeDios = inject(LoginServicioPromesaDeDios);
  // const loginMaria = inject(LoginMariaServicio);
  const router = inject(Router);

  let token: string | null = null;
  const url = Solicitud.url;

    // Verifica hacia qué API va la solicitud
  if (url.includes(Entorno.ApiUrlPromesaDeDios)) {
    token = LoginPromesaDeDios.ObtenerToken();
  } 
  // else if (url.includes('apiMaria')) {
  //   token = loginMaria.ObtenerToken();
  // }


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
        if (url.includes('/PromesaDeDios')) {
          LoginPromesaDeDios.EliminarToken();
          router.navigate(['/menu']);
        } 
        // else if (url.includes('apiMaria')) {
        //   loginMaria.EliminarToken();
        //   router.navigate(['/login-maria']);
        // }
      }

      return throwError(() => error);
    })
  );
};
