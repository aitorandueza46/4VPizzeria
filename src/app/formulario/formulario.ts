import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  totalPedido = input(0);

  

  pedidoForm = new FormGroup({
    horaEntrega: new FormControl(''),
    direccion: new FormControl(''),
    metodoPago: new FormControl('bizum'),
    telefono: new FormControl(''),
  });
}
