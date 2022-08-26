import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Suscripcion } from 'src/app/models/suscripcion';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MensajeService } from 'src/app/services/mensaje.service';
import { SuscripcionService } from 'src/app/services/suscripcion.service';

//componente encargado de editar suscripcion
@Component({
  selector: 'app-editar-suscripciones',
  templateUrl: './editar-suscripciones.component.html',
  styleUrls: ['./editar-suscripciones.component.scss'],
})
export class EditarSuscripcionesComponent implements OnInit {
  id!: string;
  formulario!: FormGroup;
  suscripcion: Suscripcion = new Suscripcion();
  constructor(
    private suscripcionServicio: SuscripcionService,
    private ruta: Router,
    private msj: MensajeService,
    private fb: FormBuilder,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
    this.id = this.rutaActiva.snapshot.params['id'];
    this.cargar();
  }

  //permite cargar los datos que se van a editar
  cargar() {
    this.suscripcionServicio
      .consultarSuscripcion(this.id)
      .subscribe((resultado) => {
        this.suscripcion = resultado;
        this.formulario.setValue({
          correo: resultado.correo,
          password: resultado.password,
          perfil: resultado.perfil,
          pin: resultado.pin,
          fechaInicio: resultado.fechaInicio,
          fechaFinal: resultado.fechaFinal
        });
      });
  }

  //permite crear el formulario
  crearFormulario() {
    this.formulario = this.fb.group({
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      perfil: ['', Validators.required],
      pin: [''],
      fechaInicio:['',Validators.required],
      fechaFinal:['',Validators.required]
    });
  }

  //permite editar la suscripcion
  editar() {
    this.suscripcion.correo = this.formulario.value.correo;
    this.suscripcion.password = this.formulario.value.password;
    this.suscripcion.perfil = this.formulario.value.perfil;
    this.suscripcion.pin = this.formulario.value.pin;
    this.suscripcion.fechaInicio= this.formulario.value.fechaInicio;
    this.suscripcion.fechaFinal= this.formulario.value.fechaFinal;
    Swal.fire({
      title: '¿Esta seguro que desea editar esta cuenta? ',
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#0275dB',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.suscripcionServicio.editarSuscripcion(this.suscripcion).subscribe(
          (resultado) => {
            this.msj.success('Editar', 'La suscripcion se editó correctamente');
            this.formulario.reset();
            this.atras();
          },
          (error) => {
            console.log(error);
            this.msj.error('Editar', 'La suscripcion no se editó');
            this.atras();
          }
        );
      }
    });
  }

  //permite volver al componente anterior
  atras() {
    this.ruta.navigateByUrl('/cliente-suscripciones/' + this.suscripcion.cliente.id);
  }
}
