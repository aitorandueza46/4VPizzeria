import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navegador',
  imports: [],
  templateUrl: './navegador.html',
  styleUrl: './navegador.css',
})
export class Navegador {
  busquedaNA = output<string>();
}
