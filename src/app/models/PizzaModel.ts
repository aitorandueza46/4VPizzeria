export class PizzaModel {
  nombre: string;
  precio: number;
  ingredientes: string;
  imagen: string;

  constructor(
    nombre: string,
    precio: number,
    ingredientes: string,
    imagen: string,
  ) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
    this.imagen = imagen;
  }

  get precioFormateado(): string {
    return this.precio.toFixed(2).replace('.', ',') + '€';
  }
}
