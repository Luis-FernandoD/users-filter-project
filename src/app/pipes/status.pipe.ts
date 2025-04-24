import { Pipe, PipeTransform } from '@angular/core';
import { IStatus } from '../interfaces/user/status.interface';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALID_STATUS = status === undefined || status === null;

    if(INVALID_STATUS) {
      return 'Status indisponivel ou inválido';
    }

   return status ? 'Ativo' : 'Inativo';
  }

}
