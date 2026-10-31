import { PizzaModel } from '../models/PizzaModel';

export interface LineaPedido {
  pizza: PizzaModel;
  cantidad: number;
}
