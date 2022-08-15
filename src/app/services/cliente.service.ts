import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Suscripcion } from '../models/suscripcion';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  cliente!: Cliente | null;
  clientes: Cliente[] = new Array<Cliente>();

  private endpoint: string = 'http://localhost:8080/api/combodigital/';
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  });

  constructor(private http: HttpClient) {}

  // consulta lista clientes api get
  consultarLista(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.endpoint}lista/cliente`);
  }

  // consulta cliente api get
  consultarCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.endpoint}consultar/cliente/${id}`);
  }

  //consulta suscripciones del cliente
  consultarClienteSuscripcion(id:string):Observable<Suscripcion[]>{

    return this.http.get<Suscripcion[]>(`${this.endpoint}consultar/cliente/${id}/suscripcion`);
  }

  // guarda cliente api post
  guardarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.endpoint}guardar/cliente`, cliente, {
      headers: this.headers,
    });
  }

  // editar cliente api put
  editarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.endpoint}editar/cliente`, cliente, {
      headers: this.headers,
    });
  }

  //eliminar cliente api delete
  eliminarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}eliminar/cliente/${id}`);
  }
}
