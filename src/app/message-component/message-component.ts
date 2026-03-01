import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-component',
  imports: [],
  templateUrl: './message-component.html',
  styleUrl: './message-component.css',
})
export class MessageComponent {
  @Input() message: string = '';

}
