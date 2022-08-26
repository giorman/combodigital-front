import { Component, OnInit } from '@angular/core';
import { Suscripcion } from 'src/app/models/suscripcion';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { MensajeService } from 'src/app/services/mensaje.service';
import Swal from 'sweetalert2';
import { ClienteService } from 'src/app/services/cliente.service';
import { SuscripcionService } from 'src/app/services/suscripcion.service';

@Component({
  selector: 'app-cliente-suscripciones',
  templateUrl: './cliente-suscripciones.component.html',
  styleUrls: ['./cliente-suscripciones.component.scss'],
})

/*Este componente se encarga de visualizar las suscripciones por cliente*/
export class ClienteSuscripcionesComponent implements OnInit {
  id!: string;
  suscripciones: Suscripcion[] = new Array<Suscripcion>();
  cliente!: Cliente;
  constructor(
    private clienteServicio: ClienteService,
    private suscripcionServicio: SuscripcionService,
    private rutaActiva: ActivatedRoute,
    private ruta: Router,
    private msj: MensajeService
  ) {}

  ngOnInit(): void {
    //recibe el id del cliente seleccionado
    this.id = this.rutaActiva.snapshot.params['id'];
    this.buscar();
  }

  //se encarga de buscar las suscripciones de el cliente seleccionado
  buscar() {
    this.suscripciones.length = 0;
    this.clienteServicio.consultarClienteSuscripcion(this.id).subscribe((resultado) => {
      this.suscripciones = resultado;
      if (this.suscripciones.length == 0) {
        this.msj.info(
          'Suscripciones',
          'No se encontraron suscripciones para este cliente'
        );
        this.ruta.navigateByUrl('/clientes');
      }
    });
  }

  //elimina la suscripcion seleccionada
  eliminar(id: string) {
    Swal.fire({
      title: '¿Esta seguro que desea eliminar esta suscripcion? ',
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#0275dB',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.suscripcionServicio.eliminarSuscripcion(id).subscribe(
          () => {
            this.msj.success(
              'Eliminar',
              'La suscripcion se elimino correctamente'
            );
            this.buscar();
          },
          (error) => {
            console.log(error);
            this.msj.error(
              'Eliminar',
              'La suscripcion no se elimino correctamente'
            );
          }
        );
      }
    });
  }

  //dirige al componente encargado de realizar la ediccion del componente
  editar(id: string) {
    this.ruta.navigateByUrl('/editar-suscripciones/' + id );
  }

  //dirige al componente de clientes
  volver() {
    this.ruta.navigateByUrl('/clientes');
  }
}
