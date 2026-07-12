import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entorno } from '../../Entornos/Entorno';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class InformacionBd_ServicioCevicheriaCastillo {
  private Url = `${Entorno.ApiUrlCevicheriaCastillo}basedatos`; 

  constructor(private http: HttpClient) {}

  ObtenerBd(): Observable<any> {
    return this.http.get(`${this.Url}/espaciobd`);
  }
}
