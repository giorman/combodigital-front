import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Cliente } from 'src/app/models/cliente';
import { MensajeService } from 'src/app/services/mensaje.service';
import { ClienteService } from 'src/app/services/cliente.service';
//se encarga de mostrar la ventana donde aparecen los clientes
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = new Array<Cliente>();

  constructor(
    private clienteServicio: ClienteService,
    private msj: MensajeService
  ) {}

  ngOnInit(): void {
    this.actualizar();
  }

  //metodo actualiza lista clientes
  actualizar() {
    this.clienteServicio.consultarLista().subscribe((resultado) => {
      this.clientes = resultado;
      this.clienteServicio.clientes = resultado;
      this.ordenar(this.clientes);
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

  //metodo busqueda cliente
  buscar(evento: any) {
    let nombre: string = evento.target.value;
    this.clientes = this.clienteServicio.clientes.filter((cliente) =>
      `${cliente.nombre} ${cliente.apellido}`
        .toLowerCase()
        .includes(nombre.toLowerCase())
    );
    this.ordenar(this.clientes);
  }

  //metodo elimina cliente
  eliminar(id: string) {
    Swal.fire({
      title: '¿Esta seguro que desea eliminar este cliente? ',
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#0275dB',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteServicio.eliminarCliente(parseInt(id)).subscribe(
          () => {
            this.msj.success('Eliminar', 'Se elimino correctamente');
            this.actualizar();
          },
          (error) => {
            console.log(error);
            this.msj.error('Eliminar', 'No se realizo eliminacion del cliente');
          }
        );
      }
    });
  }
}
