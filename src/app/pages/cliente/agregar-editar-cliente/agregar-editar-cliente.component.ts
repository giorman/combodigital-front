import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Cliente } from 'src/app/models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajeService } from 'src/app/services/mensaje.service';
import { ClienteService } from 'src/app/services/cliente.service';

//componente se encarga de agregar y editar el cliente
@Component({
  selector: 'app-agregar-editar-cliente',
  templateUrl: './agregar-editar-cliente.component.html',
  styleUrls: ['./agregar-editar-cliente.component.scss'],
})
export class AgregarEditarClienteComponent implements OnInit {
  formulario!: FormGroup;
  clientes: Cliente[] = new Array<Cliente>();
  cliente: Cliente = new Cliente();
  editable: boolean = false;
  id!: string;

  constructor(
    private clienteService: ClienteService,
    private ruta: Router,
    private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private msj: MensajeService
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
    this.validarEditable();
  }

  //permite crear el formulario
  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  //valida si la ventan es para editar o guardar
  validarEditable() {
    this.id = this.rutaActiva.snapshot.params['id'];
    if (this.id) {
      this.editable = true;
      this.cargarDatos();
    }
  }

  //carga los datos si es para editar
  cargarDatos() {
    this.clienteService.consultarCliente(this.id).subscribe(
      (resultado) => {
        this.cliente = resultado;
        this.formulario.setValue({
          nombre: this.cliente.nombre,
          apellido: this.cliente.apellido,
          telefono: this.cliente.telefono,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //guarda los datos del cliente nuevo
  guardar() {
    this.cliente = this.formulario.value as Cliente;
    this.clienteService.guardarCliente(this.cliente).subscribe(
      (resultado) => {
        this.formulario.reset();
        this.msj.success('Guardar', 'El Cliente se ha guardado correctamente');
      },
      (error) => {
        console.log(error);
        this.msj.error('Guardar', 'No se guardo el cliente');
        this.atras();
      }
    );
  }

  // edita los datos del cliente
  editar() {
    this.cliente.nombre = this.formulario.value.nombre;
    this.cliente.apellido = this.formulario.value.apellido;
    this.cliente.telefono = this.formulario.value.telefono;
    Swal.fire({
      title: '¿Esta seguro que desea editar este cliente? ',
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#0275dB',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.editarCliente(this.cliente).subscribe(
          (resultado) => {
            this.formulario.reset();
            this.msj.success(
              'Editar',
              'El Cliente se ha editado correctamente'
            );
            this.atras();
          },
          (error) => {
            console.log(error);
            this.msj.error('Editar', 'No se guardo el cliente');
            this.atras();
          }
        );
      }
    });
  }

  //me devulve a la pagina cliente
  atras() {
    this.ruta.navigateByUrl('/clientes');
  }
}
