import { Component, input } from '@angular/core';
import { LineaPedido } from './pedido.model';

@Component({
  selector: 'app-pedido',
  imports: [],
  templateUrl: './pedido.html',
  styleUrl: './pedido.css',
})
export class Pedido {
  lineasPedido = input.required<LineaPedido[]>();

  subtotal(linea: LineaPedido): number {
    return linea.pizza.precio * linea.cantidad;
  }

  total(): number {
    let suma = 0;
    for (const linea of this.lineasPedido()) {
      suma = suma + this.subtotal(linea);
    }
    return suma;
  }
}
