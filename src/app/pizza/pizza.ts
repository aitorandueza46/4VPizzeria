import { Component, input } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel';

@Component({
  selector: 'app-pizza',
  imports: [],
  templateUrl: './pizza.html',
  styleUrl: './pizza.css',
})
export class Pizza {
  // INPUT: el padre le pasa la pizza que tiene que pintar
  pizza = input.required<PizzaModel>();
}
