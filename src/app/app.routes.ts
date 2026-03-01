import { Routes } from '@angular/router';
import { TituloTienda } from './titulo-tienda/titulo-tienda';
import { TarjetaProducto } from './tarjeta-producto/tarjeta-producto';
import { Resumen } from './resumen/resumen';
import { UsandoIf } from './usando-if/usando-if';
import { UsandoFor } from './usando-for/usando-for';
import { UsandoIf2 } from './usando-if-2/usando-if-2';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';
import { MessageComponent } from './message-component/message-component';
import { ColorBoxComponent } from './color-box-component/color-box-component';
import { AlertButtonComponent } from './alert-button-component/alert-button-component';
import { CounterComponent } from './counter-component/counter-component';
import { PerroComponent } from './perro-component/perro-component';

export const routes: Routes = [
  { path: '', redirectTo: 'titulo-tienda', pathMatch: 'full' },
  { path: 'titulo-tienda',    component: TituloTienda },
  { path: 'tarjeta-producto', component: TarjetaProducto },
  { path: 'resumen',          component: Resumen },
  { path: 'usando-if',        component: UsandoIf },
  { path: 'usando-for',       component: UsandoFor },
  { path: 'usando-if-2',      component: UsandoIf2 },
  { path: 'lista-usuarios',   component: ListaUsuarios },
  { path: 'message',          component: MessageComponent },
  { path: 'color-box',        component: ColorBoxComponent },
  { path: 'alert-button',     component: AlertButtonComponent },
  { path: 'counter',          component: CounterComponent },
  { path: 'perritos',         component: PerroComponent },
];

