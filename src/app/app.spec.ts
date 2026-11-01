import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { App } from './app';
import { PizzaModel } from './models/PizzaModel';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('suma la cantidad si la pizza ya estaba en el pedido', () => {
    const app = TestBed.createComponent(App).componentInstance;
    const pizza = new PizzaModel('Margarita', 8.5, 'tomate y mozzarella', 'pizza.jpg');

    app.agregarPizzaAlPedido(pizza, 2);
    app.agregarPizzaAlPedido(pizza, 1);

    expect(app.lineasPedido).toEqual([{ pizza, cantidad: 3 }]);
  });

  it('al pagar avisa, limpia el pedido y vuelve a la lista', () => {
    const aviso = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const app = TestBed.createComponent(App).componentInstance;
    const pizza = new PizzaModel('Margarita', 8.5, 'tomate y mozzarella', 'pizza.jpg');
    app.agregarPizzaAlPedido(pizza, 2);
    app.cambiarVista('formulario');

    app.finalizarPedido();

    expect(app.lineasPedido).toEqual([]);
    expect(aviso).toHaveBeenCalled();
    expect(app.vista).toBe('lista');
  });

  it('cambia de vista', () => {
    const app = TestBed.createComponent(App).componentInstance;

    app.cambiarVista('formulario');

    expect(app.vista).toBe('formulario');
  });
});
