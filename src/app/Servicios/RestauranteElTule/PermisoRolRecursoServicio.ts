import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entorno } from '../../Entornos/Entorno';

@Injectable({
  providedIn: 'root'
})
export class PermisoRolRecursoServicio {
  private Url = `${Entorno.ApiUrlRestauranteElTule}permisorolrecurso`;

  constructor(private http: HttpClient) { }

  Listado(): Observable<any> {
    return this.http.get(`${this.Url}/listado`);
  }

  ObtenerPorCodigo(codigoRol: number, codigoPermiso: number, codigoRecurso: number): Observable<any> {
    return this.http.get(`${this.Url}/${codigoRol}/${codigoPermiso}/${codigoRecurso}`);
  }

  Buscar(tipo: number, valor: string): Observable<any> {
    return this.http.get(`${this.Url}/buscar/${tipo}/${valor}`);
  }

  Crear(datos: any): Observable<any> {
    return this.http.post(`${this.Url}/crear`, datos);
  }

  Editar(Datos: any): Observable<any> {
    return this.http.put(`${this.Url}/editar`, Datos);
  }

  FiltrarRoles(): Observable<any> {
    return this.http.get(`${this.Url}/filtrar-roles`);
  }
  FiltrarRecursos(codigoRol: number): Observable<any> {
    return this.http.get(`${this.Url}/filtrar-recursos/${codigoRol}`);
  }

  FiltrarPermisos(codigoRol: number, codigoRecurso: number): Observable<any> {
    return this.http.get(`${this.Url}-filtrar-permisos/${codigoRol}/${codigoRecurso}`);
  }

  EliminarPorRol(codigoRol: number): Observable<any> {
    return this.http.delete(`${this.Url}/eliminar-por-rol/${codigoRol}`);
  }

  EliminarPorRolRecurso(codigoRol: number, codigoRecurso: number): Observable<any> {
    return this.http.delete(`${this.Url}/eliminar-por-rol-recurso/${codigoRol}/${codigoRecurso}`);
  }

  EliminarPorRolRecursoPermiso(codigoRol: string, codigoRecurso: string, codigoPermiso: string) {
    const url = `${this.Url}/eliminar-por-rol-recurso-permiso/${codigoRol}/${codigoRecurso}/${codigoPermiso}`;
    return this.http.delete(url);
  }
}
