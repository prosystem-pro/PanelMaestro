import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entorno } from '../../Entornos/Entorno';

@Injectable({
  providedIn: 'root'
})
export class GestionSuperAdminServicio {

  private Url = `${Entorno.ApiUrlSastreriaDemoOficial}gestionsuperadmin`;

  constructor(private http: HttpClient) { }

  LimpiarBaseDatosReplicaCliente(): Observable<any> {
    return this.http.post(`${this.Url}/limpiarbasedatosreplicacliente`, {});
  }

  LimpiarSoloRegistrosTotal(): Observable<any> {
    return this.http.post(`${this.Url}/limpiar-solo-registros-total`, {});
  }

  VaciarTotalBaseDatos(): Observable<any> {
    return this.http.post(`${this.Url}/vaciar-total-basedatos`, {});
  }

}