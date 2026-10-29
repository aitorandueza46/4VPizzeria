import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegador } from './navegador/navegador';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navegador, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})


export class App {
  busquedaApp= signal('');
}
