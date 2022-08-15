import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { SuscripcionDatosComponent } from './suscripcion-datos/suscripcion-datos.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { VentaComponent } from './venta/venta.component';
import { ClienteSuscripcionesComponent } from './cliente-suscripciones/cliente-suscripciones.component';
import { RenovacionesComponent } from './renovaciones/renovaciones.component';
import { AgregarEditarClienteComponent } from './agregar-editar-cliente/agregar-editar-cliente.component';
import { EditarSuscripcionesComponent } from './editar-suscripciones/editar-suscripciones.component';
import { GananciasComponent } from './ganancias/ganancias.component';
import { HttpClientModule } from '@angular/common/http';
import { VencidasComponent } from './vencidas/vencidas.component';
import { BuscadorSuscripcionesComponent } from './buscador-suscripciones/buscador-suscripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ClientesComponent,
    SuscripcionComponent,
    SuscripcionDatosComponent,
    CuentaComponent,
    VentaComponent,
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
