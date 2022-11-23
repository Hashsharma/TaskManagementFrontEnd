import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserModel } from 'src/models/users';
import { UserService } from 'src/services/userservices/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})

export class SignupComponent implements OnInit {
  userData: UserModel = <UserModel>{};
  result : any ;
  userCredential : any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.createUserTemporary();
  }

 
   


}