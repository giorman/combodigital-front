import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/cliente/clientes/clientes.component';
import { VentaSuscripcionComponent } from './pages/venta/venta-suscripcion/venta-suscripcion.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { CarritoComponent } from './pages/venta/carrito/carrito.component';
import { ClienteSuscripcionesComponent } from './pages/suscripcion/cliente-suscripciones/cliente-suscripciones.component';
import { RenovacionesComponent } from './pages/suscripcion/renovaciones/renovaciones.component';
import { AgregarEditarClienteComponent } from './pages/cliente/agregar-editar-cliente/agregar-editar-cliente.component';
import { EditarSuscripcionesComponent } from './pages/suscripcion/editar-suscripciones/editar-suscripciones.component';
import { GananciasComponent } from './pages/ganancias/ganancias.component';
import { VencidasComponent } from './pages/suscripcion/vencidas/vencidas.component';
import { BuscadorSuscripcionesComponent } from './pages/suscripcion/buscador-suscripciones/buscador-suscripciones.component';

const routes: Routes = [
  {path:'',component:VentaSuscripcionComponent,pathMatch:'full'},
  {path:'agregar-cliente',component:AgregarEditarClienteComponent},
  {path:'editar-cliente/:id',component:AgregarEditarClienteComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'cuentas',component:CuentaComponent},
  {path:'venta',component:CarritoComponent},
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
