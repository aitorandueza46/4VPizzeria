import { Component, signal } from '@angular/core';
import { Navegador } from './navegador/navegador';
import { ListaPizzas } from './lista-pizzas/lista-pizzas';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  imports: [Navegador, ListaPizzas, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css',
})


export class App {
  busquedaApp= signal('');
}
