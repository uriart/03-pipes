import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encriptar'
})
export class EncriptarPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    if(activar){
      let retorno = '';
      for(let step = 0; step < value.length; step++){
        retorno = retorno+'*';
      }
      return retorno;
    } else {
      return value;
    }
  }
}
