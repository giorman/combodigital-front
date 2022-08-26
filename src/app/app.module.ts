import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './pages/encabezado/encabezado.component';
import { ClientesComponent } from './pages/cliente/clientes/clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VentaSuscripcionComponent } from './pages/venta/venta-suscripcion/venta-suscripcion.component';
import { VentaSuscripcionDatosComponent } from './pages/venta/venta-suscripcion-datos/venta-suscripcion-datos.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { CarritoComponent } from './pages/venta/carrito/carrito.component';
import { ClienteSuscripcionesComponent } from './pages/suscripcion/cliente-suscripciones/cliente-suscripciones.component';
import { RenovacionesComponent } from './pages/suscripcion/renovaciones/renovaciones.component';
import { AgregarEditarClienteComponent } from './pages/cliente/agregar-editar-cliente/agregar-editar-cliente.component';
import { EditarSuscripcionesComponent } from './pages/suscripcion/editar-suscripciones/editar-suscripciones.component';
import { GananciasComponent } from './pages/ganancias/ganancias.component';
import { HttpClientModule } from '@angular/common/http';
import { VencidasComponent } from './pages/suscripcion/vencidas/vencidas.component';
import { BuscadorSuscripcionesComponent } from './pages/suscripcion/buscador-suscripciones/buscador-suscripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ClientesComponent,
    VentaSuscripcionComponent,
    VentaSuscripcionDatosComponent,
    CuentaComponent,
    CarritoComponent,
    ClienteSuscripcionesComponent,
    RenovacionesComponent,
    AgregarEditarClienteComponent,
    EditarSuscripcionesComponent,
    GananciasComponent,
    VencidasComponent,
    BuscadorSuscripcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
