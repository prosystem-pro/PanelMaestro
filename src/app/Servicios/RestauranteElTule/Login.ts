import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entorno } from '../../Entornos/Entorno';

@Injectable({
  providedIn: 'root'
})
export class LoginServicioRestauranteElTule {
  private Url = Entorno.ApiUrlRestauranteElTule;
  public NombreEmpresa: string = 'Promesa De Dios';

  constructor(private http: HttpClient) {}

  Login(NombreUsuario: string, Clave: string): Observable<any> {
    const Datos = { NombreUsuario, Clave };
    const url = `${this.Url}login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return new Observable(observer => {
      this.http.post(url, Datos, { headers }).subscribe({
        next: (Respuesta: any) => {
          if (Respuesta) {
            this.GuardarToken('authToken', Respuesta.data.Token);
          }
          observer.next(Respuesta);
          observer.complete();
        },
        error: (Error) => observer.error(Error)
      });
    });
  }

  ObtenerToken(): string | null {
    return localStorage.getItem('authToken');
  }

  GuardarToken(variable: string, valor: string): void {
    localStorage.setItem(variable, valor);
  }

  EliminarToken(): void {
    localStorage.removeItem('authToken');
  }
  
  ValidarToken(): boolean {
    const token = this.ObtenerToken();
    if (!token) return false;
  
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiracion = payload.exp * 1000;
      const ahora = Date.now();
  
      if (expiracion < ahora) {
        this.EliminarToken();
        return false;
      }
  
      return true;
    } catch (error) {
      this.EliminarToken();
      return false;
    }
  }
  
  
}
