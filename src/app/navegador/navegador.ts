import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navegador',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navegador.html',
  styleUrl: './navegador.css',
})
export class Navegador {
  busquedaNA = output<string>();
}
