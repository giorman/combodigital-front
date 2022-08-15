import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { VentaComponent } from './venta/venta.component';
import { ClienteSuscripcionesComponent } from './cliente-suscripciones/cliente-suscripciones.component';
import { RenovacionesComponent } from './renovaciones/renovaciones.component';
import { AgregarEditarClienteComponent } from './agregar-editar-cliente/agregar-editar-cliente.component';
import { EditarSuscripcionesComponent } from './editar-suscripciones/editar-suscripciones.component';
import { GananciasComponent } from './ganancias/ganancias.component';
import { VencidasComponent } from './vencidas/vencidas.component';
import { BuscadorSuscripcionesComponent } from './buscador-suscripciones/buscador-suscripciones.component';

const routes: Routes = [
  {path:'',component:SuscripcionComponent},
  {path:'agregar-cliente',component:AgregarEditarClienteComponent},
  {path:'editar-cliente/:id',component:AgregarEditarClienteComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'cuentas',component:CuentaComponent},
  {path:'venta',component:VentaComponent},
  {path:'cliente-suscripciones/:id',component:ClienteSuscripcionesComponent},
  {path:'renovaciones',component:RenovacionesComponent},
  {path:'vencidas',component:VencidasComponent},
  {path:'editar-suscripciones/:id',component:EditarSuscripcionesComponent},
  {path:'ganancias',component:GananciasComponent},
  {path:'buscador',component:BuscadorSuscripcionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
