import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/userservices/user.service';
import { UserModel } from 'src/models/users';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  userData: UserModel = <UserModel>{};
  result : any ;
  userCredential : any;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit() {
    this.checkUserCredentials();
  }

  checkUserCredentials() {
      if(localStorage.getItem('userRID') == null){
      this.userService.createUserTemporary()
    }    
  }
}
