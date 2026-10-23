import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navegador',
  imports: [],
  templateUrl: './navegador.html',
  styleUrl: './navegador.css',
})
export class Navegador {
  // OUTPUT: avisa al padre de lo que se escribe en el buscador
  busqueda = output<string>();
}
