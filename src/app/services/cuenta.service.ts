import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cuenta } from '../models/cuenta';
import { Observable } from 'rxjs';
import { Suscripcion } from '../models/suscripcion';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CuentaService {
  private endpoint= environment.apiBaseURL;;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  });
  constructor(private http: HttpClient) {}

  //consulta lista cuentas api-get
  consultarLista(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(`${this.endpoint}lista/cuenta`, {
      headers: this.headers,
    });
  }

  //consulta cuenta api-get
  consultarCuenta(id: string): Observable<Cuenta> {
    return this.http.get<Cuenta>(`${this.endpoint}consultar/cuenta/${id}`, {
      headers: this.headers,
    });
  }

  //consulta suscripciones de la cuenta id
  consultarSuscripcionCuenta(id:string):Observable<Suscripcion[]>{
    return this.http.get<Suscripcion[]>(`${this.endpoint}consultar/cuenta/${id}/suscripcion`, {
      headers: this.headers,
    });
  }


  //agregar una cuenta nueva api-post
  agregarCuenta(cuenta: Cuenta): Observable<Cuenta> {
    return this.http.post<Cuenta>(`${this.endpoint}agregar/cuenta`, cuenta, {
      headers: this.headers,
    });
  }

  //edita una cuenta api-put
  editarCuenta(cuenta: Cuenta): Observable<Cuenta> {
    return this.http.put<Cuenta>(`${this.endpoint}editar/cuenta`, cuenta, {
      headers: this.headers,
    });
  }

  //elimina una cuenta api-delete
  eliminarCuenta(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}eliminar/cuenta/${id}`, {
      headers: this.headers,
    });
  }
}
