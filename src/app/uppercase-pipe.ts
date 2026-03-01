import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
})
export class UppercasePipe implements PipeTransform {

    transform(value: string | null | undefined): string {
    return value?.toUpperCase() ?? '';
  }

}
