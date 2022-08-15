import { Injectable } from '@angular/core';
import { Venta } from '../models/venta';
import { Suscripcion } from '../models/suscripcion';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  venta!: Venta | null;
  constructor() {}

  // lista de suscripciones en el carrito
  get listaSuscripciones(): Array<Suscripcion> {
    if (this.venta) {
      return this.venta.suscripcion;
    } else {
      return new Array<Suscripcion>();
    }
  }
}
