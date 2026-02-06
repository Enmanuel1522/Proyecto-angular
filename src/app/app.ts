import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProducto } from "./tarjeta-producto/tarjeta-producto";
import { TituloTienda } from "./titulo-tienda/titulo-tienda";
import { Resumen } from "./resumen/resumen";
import { UsandoIf } from "./usando-if/usando-if";
import { UsandoFor } from "./usando-for/usando-for";
import { UsandoIf2 } from "./usando-if-2/usando-if-2";
import { ListaUsuarios } from "./lista-usuarios/lista-usuarios";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarjetaProducto, TituloTienda, Resumen, UsandoIf, UsandoFor, UsandoIf2, ListaUsuarios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_angular_1');
}
