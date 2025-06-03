import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/user-list';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/user/filter-options.interface';
import { isWithinInterval } from 'date-fns';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 userList: IUser[] = [];
 userSelected: IUser = {} as IUser;
 showUserDetails:boolean = false;
 usersListFiltered: IUser[] = [];

 ngOnInit() {
     setTimeout(() => {
     this.userList = UsersList ;
     this.usersListFiltered = UsersList;
     }, 1000);
 }

 onUserSelected(user: IUser){
  this.userSelected = user;
  this.showUserDetails = true;
 }

 onFilter(filterOptions: IFilterOptions){
  this.usersListFiltered = this.filterUsersList(filterOptions, this.userList);

 }
  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }
  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined && endDate === undefined;

    if (DATES_NOT_SELECTED) {
      return usersList;
    }

    const listFiltered = usersList.filter((user) => {
      if (startDate && endDate) {
        return isWithinInterval(new Date(user.dataCadastro), {
          start: startDate, end: endDate
        });
      }
      return true;
    });

      return listFiltered;
  }
  filterUsersListByStatus(status: boolean | undefined, userList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
      return userList;
    }

    const filteredList = userList.filter((user) => user.ativo === status);

    return filteredList;
  }
  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined;

    if (NAME_NOT_TYPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }





}



