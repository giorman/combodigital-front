import { Suscripcion } from './suscripcion';
export class Venta {
  id!: string;
  cliente!: any;
  suscripcion!: Suscripcion[];
  total!: number;

  constructor() {
    this.id = this.id;
    this.cliente = this.cliente;
    this.suscripcion = new Array<Suscripcion>();
    this.total = this.total;
  }
}
