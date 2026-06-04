import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entorno } from '../../Entornos/Entorno';

@Injectable({
    providedIn: 'root'
})
export class SystemBackupServicio {
    private Url = `${Entorno.ApiUrlSastreriaDemoOficial}system-backup`;

    constructor(private http: HttpClient) { }

    RespaldoCompleto(): Observable<any> {
        return this.http.get(`${this.Url}/respaldo-completo`);
    }

    RestaurarRespaldoCompleto(archivo: File): Observable<any> {
        const formData = new FormData();
        formData.append('archivo', archivo);
        return this.http.post(`${this.Url}/restaurar-respaldo-completo`, formData);
    }

    RespaldoPorMes(anio: number, mes: number): Observable<any> {
        return this.http.get(`${this.Url}/respaldo-por-mes?anio=${anio}&mes=${mes}`);
    }

    // ✅ FRONT CORREGIDO: Ahora apunta exactamente a tu ruta del Backend
    BorrarDatosPorMes(anio: number, mes: number): Observable<any> {
        return this.http.delete(`${this.Url}/borrar-datos-por-mes?anio=${anio}&mes=${mes}`);
    }

}