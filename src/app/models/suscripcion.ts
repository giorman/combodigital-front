import { Cuenta } from './cuenta';
import { Cliente } from './cliente';
export class Suscripcion {
  id!: string;
  cliente!: Cliente;
  fechaInicio!: any;
  fechaFinal!: any;
  cuenta!: Cuenta;
  correo!: string;
  password!: string;
  perfil!: string;
  pin!: string;
  proveedor!: string;
  precio!: number;
  estado!: boolean;

  constructor() {
    this.id = this.id;
    this.cuenta = this.cuenta;
    this.fechaInicio = this.fechaInicio;
    this.fechaFinal = this.fechaFinal;
    this.correo = this.correo;
    this.password = this.password;
    this.perfil = this.perfil;
    this.pin = this.pin;
    this.proveedor = this.proveedor;
    this.precio = this.precio;
    this.estado = this.estado;

  }
}
