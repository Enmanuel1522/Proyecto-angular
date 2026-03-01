import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TarjetaProducto } from "./tarjeta-producto/tarjeta-producto";
import { TituloTienda } from "./titulo-tienda/titulo-tienda";
import { Resumen } from "./resumen/resumen";
import { UsandoIf } from "./usando-if/usando-if";
import { UsandoFor } from "./usando-for/usando-for";
import { UsandoIf2 } from "./usando-if-2/usando-if-2";
import { ListaUsuarios } from "./lista-usuarios/lista-usuarios";
import { MessageComponent } from "./message-component/message-component";
import { ColorBoxComponent } from "./color-box-component/color-box-component";
import { AlertButtonComponent } from "./alert-button-component/alert-button-component";
import { CounterComponent } from "./counter-component/counter-component";
import { UppercasePipe } from './uppercase-pipe';
import { PerroComponent } from "./perro-component/perro-component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UppercasePipe, TarjetaProducto, TituloTienda, Resumen, UsandoIf, UsandoFor, UsandoIf2, ListaUsuarios, MessageComponent, ColorBoxComponent, AlertButtonComponent, CounterComponent, PerroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_angular_1');

  mensajeRecibido: string = '';

  recibirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }

  valorActual: number = 0;

  updateCount(count: number) {
    this.valorActual = count;
  }
}

