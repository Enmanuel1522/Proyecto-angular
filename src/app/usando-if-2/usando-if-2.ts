import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { not } from 'rxjs/internal/util/not';

@Component({
  selector: 'app-usando-if-2',
  imports: [CommonModule, FormsModule],
  templateUrl: './usando-if-2.html',
  styleUrl: './usando-if-2.css',
})
export class UsandoIf2 {
  score: number = 0;

  incrementarPuntuacion() {
    this.score = this.score;
  }

}
