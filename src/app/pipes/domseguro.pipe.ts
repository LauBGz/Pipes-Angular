import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
    //Lo inyectamos de forma privada porque solo lo usamos aquí
    constructor(private domSainitizer: DomSanitizer){};

    transform(value: string, ...args: unknown[]): SafeResourceUrl {
        //String: url, parámetros se puede dejar
        return this.domSainitizer.bypassSecurityTrustResourceUrl(value);
    }

}
