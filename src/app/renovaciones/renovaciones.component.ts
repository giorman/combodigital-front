import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Router } from '@angular/router';
import { SuscripcionService } from '../services/suscripcion.service';
import { Suscripcion } from '../models/suscripcion';

//componente encargado de visualizar las suscripciones qeu deben renovarse
@Component({
  selector: 'app-renovaciones',
  templateUrl: './renovaciones.component.html',
  styleUrls: ['./renovaciones.component.scss'],
})
export class RenovacionesComponent implements OnInit {
  id!: string;
  renovaciones: Suscripcion[] = new Array<Suscripcion>();
  cliente!: Cliente;
  constructor(
    private suscripcionServicio: SuscripcionService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar(){
     // consultar renovaciones
     this.suscripcionServicio.consultarRenovaciones().subscribe((resultado)=>{
      this.suscripcionServicio.renovaciones=resultado;
      this.renovaciones=this.suscripcionServicio.renovaciones;

    });


  }

  volver() {
    this.ruta.navigateByUrl('/clientes');
  }
}
