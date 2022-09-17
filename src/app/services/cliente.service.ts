import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Suscripcion } from '../models/suscripcion';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  cliente!: Cliente | null;
  clientes: Cliente[] = new Array<Cliente>();

  private endpoint = environment.apiBaseURL;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  });

  constructor(private http: HttpClient) {}

  // consulta lista clientes api get
  consultarLista(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.endpoint}cliente`);
  }

  // consulta cliente api get
  consultarCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.endpoint}cliente/${id}`);
  }

  //consulta suscripciones del cliente
  consultarClienteSuscripcion(id:string):Observable<Suscripcion[]>{

    return this.http.get<Suscripcion[]>(`${this.endpoint}cliente/${id}/suscripcion`);
  }

  // guarda cliente api post
  guardarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.endpoint}cliente`, cliente, {
      headers: this.headers,
    });
  }

  // editar cliente api put
  editarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.endpoint}cliente`, cliente, {
      headers: this.headers,
    });
  }

  //eliminar cliente api delete
  eliminarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}cliente/${id}`);
  }
}
