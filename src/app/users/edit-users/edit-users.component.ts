import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  @Input() user : User;
  @Output() updateUser = new EventEmitter<User>(); 
  @Output() removeUser = new EventEmitter<any>();

  onEdit:boolean = false;

  login:string;
  password:string;
  age:number;
  typeAuth: boolean;

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.updateUser.emit(
      {login: this.login, password: this.password, age: this.age, typeAuth: this.typeAuth}
    );
    this.onEdit = false;
  }

  edit(){
    this.onEdit = true;
    this.login = this.user.login;
    this.password = this.user.password;
    this.age = this.user.age;
    this.typeAuth = this.user.typeAuth;
  }

  remove(){
    this.removeUser.emit();
  }

  cancel(){
    this.onEdit = false;
  }
}
