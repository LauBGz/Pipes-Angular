import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'//El nombre se puede cambiar aquí
})
// export class CapitalizadoPipe implements PipeTransform {
//     //PipeTransform es la función que se llama cuando queremos hacer la modificación

//   transform(value: unknown, ...args: unknown[]): unknown {
//     //Value es el valor de la string o number

//     //...arg: junta todos los argumentos que se le envían, por ejemplo, en capitalizado:1:true:'Hola'
//     //en vez de ...arg podría ser por ejemplo
//     // transform(value: unknown, edad: number, activo: boolean, mensaje: string): string {

//     //:unknown es el tipo de output de la función (no especificado)
//     return null;
//   }

  export class CapitalizadoPipe implements PipeTransform {

  transform(value: string):string {
      value = value.toLocaleLowerCase();
      let nombres = value.split(' ');

      nombres = nombres.map( nombre => {
        return nombre[0].toLocaleUpperCase() + nombre.substr(1);
     });

      return nombres.join(' ');
  }

}
