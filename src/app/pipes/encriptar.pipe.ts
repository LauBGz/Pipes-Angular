import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encriptar'
})
export class EncriptarPipe implements PipeTransform {

  transform(value: string, activo: boolean = true): string {
    return (activo) ? '*'.repeat(value.length) : value;
  }

}
