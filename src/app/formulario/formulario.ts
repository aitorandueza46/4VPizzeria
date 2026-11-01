import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  totalPedido = input(0);

  pedidoEnviado = output<void>();

  pedidoForm = new FormGroup({
    horaEntrega: new FormControl('', [
      Validators.required,
      Validators.pattern(/^([01]\d|2[0-3]):[0-5]\d$/),
    ]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    metodoPago: new FormControl('bizum'),
    tarjeta: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.pattern(/^\d{16}$/),
    ]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
  });

  constructor() {
    this.pedidoForm.controls.metodoPago.valueChanges.subscribe((metodo) => {
      if (metodo === 'tarjeta') {
        this.pedidoForm.controls.tarjeta.enable();
        this.pedidoForm.controls.telefono.disable();
      } else {
        this.pedidoForm.controls.telefono.enable();
        this.pedidoForm.controls.tarjeta.disable();
      }
    });
  }

  get horaEntrega() {
    return this.pedidoForm.get('horaEntrega');
  }
  get direccion() {
    return this.pedidoForm.get('direccion');
  }
  get tarjeta() {
    return this.pedidoForm.get('tarjeta');
  }
  get telefono() {
    return this.pedidoForm.get('telefono');
  }

  enviarPedido() {
    if (this.pedidoForm.invalid) {
      this.pedidoForm.markAllAsTouched();
      return;
    }

    this.pedidoEnviado.emit();
    this.pedidoForm.reset({ metodoPago: 'bizum' });
  }
}
