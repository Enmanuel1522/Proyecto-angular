import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';;

@Component({
  selector: 'app-usando-for',
  imports: [CommonModule, FormsModule],
  templateUrl: './usando-for.html',
  styleUrl: './usando-for.css',
})

export class UsandoFor {
  frutas: string[] = ['Manzana', 'Platano', 'Cereza', 'Durazno', 'Fresa'];

  nuevaFruta: string = '';

  agregarFruta() {
    if (this.nuevaFruta.trim() !== '') {
      this.frutas.push(this.nuevaFruta);
      this.nuevaFruta = ''; 
    }
  }
}

