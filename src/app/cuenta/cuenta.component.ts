import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajeService } from '../services/mensaje.service';
import { Cuenta } from '../models/cuenta';
import { CuentaService } from '../services/cuenta.service';

//componente encargado de visualizar y todas la aaciones basicas de la cuentas
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
})
export class CuentaComponent implements OnInit {
  formulario!: FormGroup;
  id!: string;
  cuentas: Cuenta[] = new Array<Cuenta>();
  cuenta!: Cuenta;
  editable: boolean = false;

  constructor(
    public cuentaServicio: CuentaService,
    private fb: FormBuilder,
    private msj: MensajeService
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
    this.actualizar();
  }

  //permite actulizar el contenido de la pagina
  actualizar() {
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

  //crea el formulario
  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      dia: ['', Validators.required],
    });
  }

  //cargar los datos a editar
  cargarDatos(id: string) {
    this.cuentaServicio.consultarCuenta(id).subscribe(
      (resultado) => {
        this.cuenta = resultado;
        this.formulario.setValue({
          nombre: this.cuenta.nombre,
          precio: this.cuenta.precio,
          dia: this.cuenta.dia
        });
        this.editable = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //guarda una cuenta nueva
  guardar() {
    this.cuenta = this.formulario.value;
    this.cuentaServicio.agregarCuenta(this.cuenta).subscribe(
      (resultado) => {
        this.formulario.reset();
        this.msj.success('Guardar', 'La cuenta se ha guardado correctamente');
        this.actualizar();
      },
      (error) => {
        console.log(error);
        this.msj.error('Guardar', 'No se guardo la cuenta');
      }
    );
  }

  //edita una cuenta
  editar() {
    Swal.fire({
      title: '¿Esta seguro que desea editar esta cuenta? ',
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#0275dB',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cuenta.nombre = this.formulario.value.nombre;
        this.cuenta.precio = this.formulario.value.precio;
        this.cuenta.dia = this.formulario.value.dia;
        this.cuentaServicio.editarCuenta(this.cuenta).subscribe(
          (resultado) => {
            this.formulario.reset();
            this.msj.success('Editar', 'La cuenta se ha editado correctamente');
            this.actualizar();
            this.editable = false;
          },
          (error) => {
            console.log(error);
            this.msj.error('Editar', 'No se edito la cuenta');
          }
        );
      }
    });
  }

  //elimina una cuenta
  eliminar(id: string) {
    this.cuentaServicio.eliminarCuenta(id).subscribe(
      () => {
        this.msj.success('Eliminar', 'Se elimino correctamente');
         this.actualizar();
      },
      (error) => {
        // Entra aquí si el servicio entrega un código http da error
        console.log(error);
        this.msj.error(
          'Eliminar',
          'No se pudo eliminar por que esta relacionada con cuentas'
        );
      }
    );
  }

  //permite cancelar el modo de edicion
  cancelar() {
    this.formulario.reset();
    this.editable = false;
  }
}
