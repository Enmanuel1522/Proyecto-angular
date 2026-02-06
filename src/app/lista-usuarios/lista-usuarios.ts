import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  imports: [],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios {

  usuarios: Array<{nombre: string, edad: number, activo: boolean}> = [
    {nombre: 'Juan', edad: 22, activo: true},
    {nombre: 'Ana', edad: 19, activo: false},
    {nombre: 'Luis', edad: 25, activo: true},
    {nombre: 'Marta', edad: 21, activo: false},
    {nombre: 'Carlos', edad: 23, activo: true},
  ];
}
