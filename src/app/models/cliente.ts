import { DocumentReference } from '@angular/fire/compat/firestore';

export class Cliente {
  id!: string;
  nombre!: string;
  apellido!: string;
  telefono!: string;

  constructor() {
    this.id = this.id;
    this.nombre = this.nombre;
    this.apellido = this.apellido;
    this.telefono = this.telefono;
  }
}
