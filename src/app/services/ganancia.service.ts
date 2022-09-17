import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ganancia } from '../models/ganancia';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GananciaService {
  private endpoint = environment.apiBaseURL;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  });

  constructor(private http: HttpClient) {}

  //consulta listal de ganancias de todos los meses api-get
  consultarLista(): Observable<Ganancia[]> {
    return this.http.get<Ganancia[]>(`${this.endpoint}ganancia`, {
      headers: this.headers,
    });
  }

  //permite enviar una nueva ganancia y retorna la lista actulizada de ganancias de los meses
  editarValorGanancia(valor: number | null): Observable<Ganancia[]> {
    return this.http.put<Ganancia[]>(
      `${this.endpoint}ganancia/valor/${valor}`,
      { headers: this.headers }
    );
  }
}
