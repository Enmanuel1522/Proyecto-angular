import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProducto } from "./tarjeta-producto/tarjeta-producto";
import { TituloTienda } from "./titulo-tienda/titulo-tienda";
import { Resumen } from "./resumen/resumen";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarjetaProducto, TituloTienda, Resumen],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_angular_1');
}
