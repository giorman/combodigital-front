import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suscripcion } from '../models/suscripcion';
import { Cliente } from '../models/cliente';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SuscripcionService {
  private endpoint = environment.apiBaseURL;;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  });

  renovaciones: Suscripcion[] = new Array<Suscripcion>();
  vencidas: Suscripcion[] = new Array<Suscripcion>();

  constructor(private http: HttpClient) {}

  //consultar todas las suscripciones api-get
  consultarSuscripciones():Observable<Suscripcion[]> {
    return this.http.get<Suscripcion[]>(`${this.endpoint}lista/suscripcion`);
  }

  //consulta una suscripcion api-get
  consultarSuscripcion(id: string):Observable<Suscripcion> {
    return this.http.get<Suscripcion>(
      `${this.endpoint}consultar/suscripcion/${id}`
    );
  }

  //consulta todas las suscripciones que deben ser renovadas
  consultarRenovaciones():Observable<Suscripcion[]> {
    return this.http.get<Suscripcion[]>(
      `${this.endpoint}consultar/renovaciones`
    );
  }

  //consulta todas las suscripciones que ya expiraron
  consultarVencidas():Observable<Suscripcion[]> {
    return this.http.get<Suscripcion[]>(`${this.endpoint}consultar/vencidas`, {
      headers: this.headers,
    });
  }

  //permite obtener el cliente de una suscripcion por medio de su id
  // consultarClienteSuscripcion(id: string):Observable<Cliente> {
  //   return this.http.get<Cliente>(
  //     `${this.endpoint}consultar/suscripcion/${id}/cliente`
  //   );
  // }

  //permite agregar una suscripcion nueva api-post
  agregarSuscripcion(suscripcion: Suscripcion):Observable<Suscripcion> {
    return this.http.post<Suscripcion>(
      `${this.endpoint}agregar/suscripcion`,
      suscripcion,
      { headers: this.headers }
    );
  }

  //permite editar una suscripcion api-put
  editarSuscripcion(suscripcion: Suscripcion):Observable<Suscripcion> {
    return this.http.put<Suscripcion>(
      `${this.endpoint}editar/suscripcion`,
      suscripcion,
      { headers: this.headers }
    );
  }

  //permite eliminar una suscripcion api-delete
  eliminarSuscripcion(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}eliminar/suscripcion/${id}`);
  }

  //metodo actualizador vencidas
  get listaVencidas(): Suscripcion[] {
    return this.vencidas;
  }

  //metodo actualizador renovaciones
  get listaRenovaciones(): Suscripcion[] {
    return this.renovaciones;
  }

  //permite agregar los datos del cliente a cada suscripcion
  // agregarClienteLista(array: Suscripcion[]) {
  //   array.forEach((resultado) => {
  //     this.consultarClienteSuscripcion(resultado.id).subscribe((cliente) => {
  //       resultado.cliente = cliente;
  //     });
  //   });
  // }
}
