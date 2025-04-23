import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adress',
  standalone: false
})
export class AdressPipe implements PipeTransform {

  transform(value: any): string {
    if (!value || typeof value !== 'object') {
      return 'Endereço indisponível';
    }

    const { rua, numero, cidade, estado, pais } = value;

    // Validação simples: verificar se tem pelo menos rua, cidade e estado
    if (!rua || !cidade || !estado) {
      return 'Endereço incompleto';
    }

    // Formatação com campos opcionais
    const numeroParte = numero ? `, ${numero}` : '';
    const cidadeEstado = `${cidade}/${estado}`;
    const paisParte = pais ? `, ${pais}` : '';

    return `${rua}${numeroParte} - ${cidadeEstado}${paisParte}`;
  }
}
