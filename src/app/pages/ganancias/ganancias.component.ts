import { Component, OnInit } from '@angular/core';
import { GananciaService } from 'src/app/services/ganancia.service';
import { Ganancia } from 'src/app/models/ganancia';
import { MensajeService } from 'src/app/services/mensaje.service';

//componente que permite visualizar las ganancias
@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.scss'],
})
export class GananciasComponent implements OnInit {
  valor!: number | null;
  ganancias: Ganancia[] = new Array<Ganancia>();

  item: any;
  antiguedad!: boolean;
  constructor(private gananciaServicio:GananciaService,private msj:MensajeService) {
    gananciaServicio.consultarLista().subscribe((resultado)=>{
      this.ganancias=resultado;
    })
  }

  ngOnInit(): void {

  }

  //agrega el valor de la ganancia
  guardar() {
    this.gananciaServicio.editarValorGanancia(this.valor).subscribe((resultado)=>{
    this.msj.success('Ganancia','La ganancia de este mes ha sido guardada');
    this.valor=null;
    this.ganancias=resultado;
    },(error)=>{
      console.log(error);
      this.msj.error('Ganancia','La ganancia no pudo ser guardada');
    })

  }


}
