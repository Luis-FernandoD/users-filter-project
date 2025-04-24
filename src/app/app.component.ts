import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/user-list';
import { IUser } from './interfaces/user/user.interface';

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

 ngOnInit() {
     setTimeout(() => {
     this.userList = UsersList ;
     }, 3000);
 }

 onUserSelected(user: IUser){
  this.userSelected = user;
  this.showUserDetails = true;
 }
}
