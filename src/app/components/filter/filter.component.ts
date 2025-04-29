import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/user/filter-options.interface';
import { I } from '@angular/cdk/keycodes';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: '',
  }; 
  statusList = [
    {description: 'Ativo', value: true},
    {description: 'Inativo', value: false}
  ]

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter(){
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
