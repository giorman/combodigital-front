import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

//servicio encargado de la administarcion de los mensajes
@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  constructor() {}

  success(titulo: string, texto: string) {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'success',
      confirmButtonColor: '#0275dB',
    });
  }
  error(titulo: string, texto: string) {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'error',
      confirmButtonColor: '#0275dB',
    });
  }
  warning(titulo: string, texto: string) {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      confirmButtonColor: '#0275dB',
    });
  }
  info(titulo: string, texto: string) {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'info',
      confirmButtonColor: '#0275dB',
    });
  }
}
