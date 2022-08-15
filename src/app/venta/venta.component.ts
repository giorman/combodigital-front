import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../services/mensaje.service';
import { Router } from '@angular/router';
import { VentaService } from '../services/venta.service';
import { SuscripcionService } from '../services/suscripcion.service';
import { ClienteService } from '../services/cliente.service';

//componente permite visulaizar las suscripciones ingresadas en el carrito y realizar la venta
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss'],
})
export class VentaComponent implements OnInit {
  constructor(
    public ventaServicio: VentaService,
    private suscripcionService: SuscripcionService,
    private clienteServicio: ClienteService,
    private msj: MensajeService,
    private ruta: Router
  ) {}

  ngOnInit(): void {}

  //elimina suscripcion agregada al carrito
  eliminar(index: number) {
    this.ventaServicio.venta?.suscripcion.splice(index, 1);
    this.ventaServicio.venta?.suscripcion[0].cuenta.nombre;
    this.calcularTotal();
  }

  //se realiza la venta de las suscripciones agregadas al carrito
  venta() {
    if (this.ventaServicio.venta) {
      this.ventaServicio.venta.suscripcion.forEach((suscripcion) => {
        try {
          this.suscripcionService
            .agregarSuscripcion(suscripcion)
            .subscribe((resultado2) => {
              this.msj.success('Venta', 'La venta se ha guardado con exito');
              this.ventaServicio.venta = null;
              this.clienteServicio.cliente = null;
              this.ruta.navigateByUrl('/');
            });
        } catch (error) {
          this.msj.error('Venta', 'La venta no se ha guardado');
        }
      });
    }
  }

  //calcula el valor total de las suscripciones en el carrito
  calcularTotal() {
    if (this.ventaServicio.venta) {
      let precio: number = 0;
      this.ventaServicio.venta.suscripcion.map((suscripcion) => {
        precio += suscripcion.precio;
        return precio;
      });
      this.ventaServicio.venta.total = precio;
    }
  }
}
