import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { VentaService } from 'src/app/services/venta.service';

//componente de seleccion inicial de cliente para realizar la suscripcion
@Component({
  selector: 'app-venta-suscripcion',
  templateUrl: './venta-suscripcion.component.html',
  styleUrls: ['./venta-suscripcion.component.scss'],
})
export class VentaSuscripcionComponent implements OnInit {
  clientes: Cliente[] = new Array<Cliente>();
  cliente!: Cliente | null;
  visible: boolean = false;

  constructor(
    private clienteServicio: ClienteService,
    private ventaServicio: VentaService
  ) {}

  ngOnInit(): void {
   this.actualizar();
    this.validarSuscripcion();
  }

 //metodo actualiza lista clientes
 actualizar() {
  this.clienteServicio.consultarLista().subscribe((resultado) => {
    this.clientes = resultado;
    this.clienteServicio.clientes=resultado;
  });
}

  //validar si ya hay un proceso de suscripcion en sesion
  validarSuscripcion() {
    if (this.clienteServicio.cliente) {
      this.agregar(this.clienteServicio.cliente);
    }
  }

  //buscador cliente para realizar suscripciones
  buscar(evento: any) {
    this.visible = true;
    let nombre: string = evento.target.value;
    this.clientes = this.clienteServicio.clientes.filter((cliente) =>
      `${cliente.nombre} ${cliente.apellido}`
        .toLowerCase()
        .includes(nombre.toLowerCase())
    );
    if (this.cliente || nombre.length == 0) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }

  //permite agregar cliente al proceso de suscripciones
  agregar(clienteRecibido: Cliente) {
    this.cliente = clienteRecibido;
    this.clienteServicio.cliente = this.cliente;
    this.visible = false;
  }

  //permite cancelar e proceso con el cliente seleccionado
  cancelar() {
    this.cliente = null;
    this.clienteServicio.cliente = this.cliente;
    this.ventaServicio.venta = null;
  }
}
