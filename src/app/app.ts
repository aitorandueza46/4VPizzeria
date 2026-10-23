import { Component } from '@angular/core';
import { PizzaModel } from './models/PizzaModel';
import { Pizza } from './pizza/pizza';
import { Navegador } from './navegador/navegador';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  imports: [Pizza, Navegador, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // El padre es el dueño de los datos: se los pasa a los hijos con [input]
  pizzas: PizzaModel[] = [];
  pizzasFiltradas: PizzaModel[] = [];

  constructor() {
    this.pizzas = [
      new PizzaModel(
        'Margarita',
        8.5,
        'tomate, mozzarella fresca, albahaca, aceite de oliva',
        'https://imag.bonviveur.com/pizza-margarita.jpg',
        true,
      ),
      new PizzaModel(
        'Pepperoni',
        9.9,
        'mozzarella, tomate, pepperoni crujiente, orégano',
        'https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg',
        false,
      ),
      new PizzaModel(
        'Cuatro Quesos',
        10.5,
        'mozzarella, gorgonzola, parmesano, queso de cabra',
        'https://comedera.com/wp-content/uploads/sites/9/2022/04/Pizza-cuatro-quesos-shutterstock_1514858234.jpg',
        true,
      ),
      new PizzaModel(
        'Barbacoa',
        11.9,
        'pollo, bacon, carne picada, salsa barbacoa, mozzarella',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCHfW-Bvbr4iXKZWJ0f42LCQxV6ChWu729QP6wqhXElTalt9WU7k8Ibw&s=10',
        false,
      ),
      new PizzaModel(
        'Hawaiana',
        9.5,
        'jamón dulce, piña, mozzarella, tomate',
        'https://www.cocinadelirante.com/sites/default/files/images/2019/11/como-hacer-pizza-hawaiana.jpg',
        false,
      ),
      new PizzaModel(
        'Vegetal',
        9.8,
        'pimiento, cebolla, champiñón, aceitunas, mozzarella',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkJrM9wzDeBhn0xCeqn1cz69ZW_ejcRE0vEZF7HBtlw2LnBo9lFXpgtJxD&s=10',
        true,
      ),
      new PizzaModel(
        'Prosciutto',
        9.7,
        'jamón serrano, mozzarella, tomate, orégano',
        'https://recipesblob.oetker.es/assets/b5767094b028422fb1d54250393333cc/750x910/pizza-prosciutto-de-parma.webp',
        false,
      ),
      new PizzaModel(
        'Carbonara',
        11.2,
        'nata, bacon, cebolla, parmesano, mozzarella',
        'https://comedera.com/wp-content/uploads/sites/9/2022/04/pizza-carbonara.jpg',
        false,
      ),
    ];
    this.pizzasFiltradas = this.pizzas;
  }

  // Recibe el texto del navbar y refresca la lista filtrada
  filtrar(texto: string) {
    const busqueda = texto.toLowerCase();
    this.pizzasFiltradas = this.pizzas.filter((pizza) =>
      pizza.ingredientes.toLowerCase().includes(busqueda),
    );
  }
}
