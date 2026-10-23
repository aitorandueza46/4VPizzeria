export class PizzaModel {
  nombre: string;
  precio: number;
  ingredientes: string;
  imagen: string;
  vegetariana: boolean;

  constructor(
    nombre: string,
    precio: number,
    ingredientes: string,
    imagen: string,
    vegetariana: boolean,
  ) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
    this.imagen = imagen;
    this.vegetariana = vegetariana;
  }

  get precioFormateado(): string {
    return this.precio.toFixed(2).replace('.', ',') + '€';
  }
}
