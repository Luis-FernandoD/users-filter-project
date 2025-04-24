import { Pipe, PipeTransform } from '@angular/core';
import { IAdress } from '../interfaces/user/adress.interface';

@Pipe({
  name: 'adress',
  standalone: false
})
export class AdressPipe implements PipeTransform {

  transform(adress: IAdress): string {
   const INVALID_ADRESS = 
    !adress ||
    !adress.rua ||
    !adress.cidade ||
    !adress.estado ||
    adress.numero === null || adress.numero === undefined;

    if(INVALID_ADRESS){
      return "Endereço indisponivel ou inválido"
    }

    return `${adress.rua}, ${adress.numero}, ${adress.cidade}  - ${adress.estado}, ${adress.pais}`
  }
}
