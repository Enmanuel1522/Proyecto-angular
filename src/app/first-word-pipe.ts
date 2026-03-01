import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWord',
  standalone: true
})
export class FirstWordPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return '';

    const palabras = value.trim().split(' ');
    return palabras[0];
  }

}
