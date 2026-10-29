import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';

import { Navegador } from './navegador';

describe('Navegador', () => {
  let component: Navegador;
  let fixture: ComponentFixture<Navegador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navegador],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Navegador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
