import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-box-component',
  imports: [],
  templateUrl: './color-box-component.html',
  styleUrl: './color-box-component.css',
})
export class ColorBoxComponent {
  @Input() colorFondo: string = '';

}

