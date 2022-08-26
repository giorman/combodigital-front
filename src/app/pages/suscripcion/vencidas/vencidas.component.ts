import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/services/mensaje.service';
import { SuscripcionService } from 'src/app/services/suscripcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vencidas',
  templateUrl: './vencidas.component.html',
  styleUrls: ['./vencidas.component.scss'],
})
export class VencidasComponent implements OnInit {
  vencidas: any[] = new Array<any>();
  constructor(
    private suscripcionServicio: SuscripcionService,
    private ruta: Router,
    private msj: MensajeService
  ) {

  }

  ngOnInit(): void {
    this.actualizar();
  }

   // actualizar lista de vencidas
  actualizar(){
    this.suscripcionServicio.consultarVencidas().subscribe((resultado)=>{
      this.suscripcionServicio.vencidas=resultado;
      this.vencidas = this.suscripcionServicio.vencidas;
    })
  }

  //permite eliminar una suscripcion vencidas
  eliminar(id:string){
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
            this.actualizar();
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

  volver() {
    this.ruta.navigateByUrl('/clientes');
  }
}
