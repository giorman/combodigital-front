import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/venta.service';
import { SuscripcionService } from 'src/app/services/suscripcion.service';

//componente encargado de la barra superior
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})


export class EncabezadoComponent implements OnInit {

  constructor(public ventaServicio: VentaService,public suscripcionServicio:SuscripcionService) {}
  ngOnInit(): void {
    // consultar renovaciones
    this.suscripcionServicio.consultarRenovaciones().subscribe((resultado)=>{
    this.suscripcionServicio.renovaciones= resultado;
    });

    // consultar vencidas
    this.suscripcionServicio.consultarVencidas().subscribe((resultado)=>{
      this.suscripcionServicio.vencidas= resultado;
    })

  }
}
