import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-button-component',
  imports: [CommonModule],
  templateUrl: './alert-button-component.html',
  styleUrl: './alert-button-component.css',
})
export class AlertButtonComponent {
  @Output() mensajeEnviado = new EventEmitter<string>();
  @Input() mensaje: string = '';

    enviarMensaje() {
    this.mensajeEnviado.emit('Alerta, padre te envío este mensaje');
    }

}
