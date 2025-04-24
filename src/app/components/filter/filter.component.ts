import { Component } from '@angular/core';
import { IFilterOptions } from '../../interfaces/user/filter-options.interface';
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

  onFilter(){
    console.log(this.filterOptions)
  }
}
