import { Component } from '@angular/core';
import { Navegador } from './navegador/navegador';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ListaPizzas } from './lista-pizzas/lista-pizzas';
import { Pedido } from './pedido/pedido';
import { Formulario } from './formulario/formulario';
import { LineaPedido } from './pedido/pedido.model';
import { PizzaModel } from './models/PizzaModel';

@Component({
  selector: 'app-root',
  imports: [Header, Navegador, ListaPizzas, Pedido, Formulario, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  vista = 'lista';

  busquedaApp = '';

  lineasPedido: LineaPedido[] = [];

  finalizarPedido() {
    alert('¡Gracias por tu pedido!');
    this.lineasPedido = [];
    this.vista = 'lista';
  }

  cambiarVista(vista: string) {
    this.vista = vista;
  }

  cambiarBusqueda(texto: string) {
    this.busquedaApp = texto;
  }

  agregarPizzaAlPedido(pizza: PizzaModel, cantidad: number) {
    for (const linea of this.lineasPedido) {
      if (linea.pizza.nombre === pizza.nombre) {
        linea.cantidad = linea.cantidad + cantidad;
        return;
      }
    }

    this.lineasPedido.push({ pizza: pizza, cantidad: cantidad });
  }
}
