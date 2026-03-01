import { Component, Output, EventEmitter, Input,  } from '@angular/core';
import { UppercasePipe } from '../uppercase-pipe';
import { FirstWordPipe } from '../first-word-pipe';
import { ReverseTextPipe } from '../reverse-text-pipe';


@Component({
  selector: 'app-counter-component',
  imports: [UppercasePipe, FirstWordPipe,ReverseTextPipe],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterComponent {

  contador: number = 0;

  @Output() countChanged = new EventEmitter<number>();
  @Input() valorActual: number = 0;


  incrementar() {
    this.contador++;
    this.countChanged.emit(this.contador);
  }

  decrementar() {
    this.contador--;
    this.countChanged.emit(this.contador);
  }


}
