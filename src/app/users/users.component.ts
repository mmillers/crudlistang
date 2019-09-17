import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  login:string;
  password:string;
  age:number;
  typeAuth: boolean;

  users: User[] = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    // console.log(this.typeAuth);
    this.users.push(
      { login: this.login, password: this.password, age: this.age, typeAuth: this.typeAuth }
    );
    this.login = "";
    this.password = "";
    this.age = 0;
    this.typeAuth = false;
  }

  deleteUser(i){
    this.users.splice(i,1);
  }

  updateUser(us: User, i){
    this.users[i] = us;
  }

}
