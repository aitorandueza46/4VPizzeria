import { Routes } from '@angular/router';
import { ListaPizzas } from './lista-pizzas/lista-pizzas';
import { Formulario } from './formulario/formulario';


export const routes: Routes = [
    { path: '', component: ListaPizzas },
    { path: 'ListaPizzas', component: ListaPizzas },
    { path: 'Formulario', component: Formulario },
];
