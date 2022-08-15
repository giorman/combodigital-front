import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CuentaService } from '../services/cuenta.service';
import { Cuenta } from '../models/cuenta';
import { SuscripcionService } from '../services/suscripcion.service';
import { Suscripcion } from '../models/suscripcion';
import { MensajeService } from '../services/mensaje.service';

@Component({
  selector: 'app-buscador-suscripciones',
  templateUrl: './buscador-suscripciones.component.html',
  styleUrls: ['./buscador-suscripciones.component.scss'],
})
export class BuscadorSuscripcionesComponent implements OnInit {
  formulario!: FormGroup;
  cuentas: Cuenta[] = new Array<Cuenta>();
  suscripciones: Suscripcion[] = Array<Suscripcion>();
  encontrado: boolean = false;
  buscando: boolean = false;
  constructor(
    private fb: FormBuilder,
    private cuentaServicio: CuentaService,
    private suscripcionServicio: SuscripcionService,
    private msj: MensajeService
  ) {}
  ngOnInit(): void {
    this.crearFormulario();
    this.cargarCuentas();
  }

  //crear formulario
  crearFormulario() {
    this.formulario = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      cuenta: ['', Validators.required],
    });
  }

  //cargar cuentas para seleccionar
  cargarCuentas() {
    this.cuentaServicio.consultarLista().subscribe((resultado) => {
      this.cuentas = resultado;
      this.ordenar(this.cuentas);
    });
  }

  //ordenar array cliente asc
  ordenar(array: any[]) {
    array.sort((a, b) => {
      if (a.nombre.toLocaleLowerCase() > b.nombre.toLocaleLowerCase()) {
        return 1;
      }
      if (a.nombre.toLocaleLowerCase() < b.nombre.toLocaleLowerCase()) {
        return -1;
      }
      return 0;
    });
  }

  buscar() {
    this.buscando = true;
    let suscripcionesTemp: Suscripcion[] = Array<Suscripcion>();
    if (this.formulario.value.correo && this.formulario.value.cuenta) {
      this.suscripcionServicio
        .consultarSuscripciones()
        .subscribe((resultado) => {
          this.suscripciones = resultado.filter(
            (suscripcion) =>
              suscripcion.correo == this.formulario.value.correo &&
              suscripcion.cuenta.id == this.formulario.value.cuenta
          );
          this.verificarBusqueda(this.suscripciones);
        });
    } else if (this.formulario.value.correo) {
      this.suscripcionServicio
        .consultarSuscripciones()
        .subscribe((resultado) => {
          this.suscripciones = resultado.filter(
            (suscripcion) => suscripcion.correo == this.formulario.value.correo
          );
          this.verificarBusqueda(this.suscripciones);
        });
    } else if (this.formulario.value.cuenta) {
      this.cuentaServicio
        .consultarSuscripcionCuenta(this.formulario.value.cuenta)
        .subscribe((resultado) => {

          this.suscripciones = resultado;
         this.verificarBusqueda(this.suscripciones);
        });
    }
  }

  verificarBusqueda(suscripciones:Suscripcion[]){
    if (suscripciones.length == 0) {
      this.msj.info('Buscar', 'No Se Encontaron Registros');
      this.encontrado = false;
      this.buscando = false;
    }else{
      this.encontrado = true;
      this.buscando = false;
    }
  }
}
