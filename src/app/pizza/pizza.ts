import { Component, input, output } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel';

@Component({
  selector: 'app-pizza',
  imports: [],
  templateUrl: './pizza.html',
  styleUrl: './pizza.css',
})
export class Pizza {
  pizza = input.required<PizzaModel>();

  pizzaSolicitada = output<{ pizza: PizzaModel; cantidad: number }>();

  solicitarPizza(cantidadSolicitada: string): void {
    const cantidad = Number(cantidadSolicitada);

    if (!Number.isInteger(cantidad) || cantidad < 1) {
      return;
    }

    this.pizzaSolicitada.emit({ pizza: this.pizza(), cantidad });
  }
}
