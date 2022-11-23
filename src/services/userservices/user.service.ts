import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { environment } from 'src/environment';
import { UserModel } from 'src/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = environment.baseUrl;
  userData: UserModel = <UserModel>{};
  result : any ;
  userCredential : any;
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<UserModel[]>(`/users`);
  }

  registerUsers(user: UserModel) {
      return this.http.post(this.baseURL + `/users/register`, JSON.stringify(user));
  }

  delete(id: number) {
      return this.http.delete(`/users/${id}`);
  }

  createUserTemporary() {

    this.userData.userName = 'Guest'
    this.userData.userMobile = '9999999999'

    this.registerUsers(this.userData)
      .pipe(first())
      .subscribe(
        (data) => {     
          this.result = data;
          console.log('--------' + data)
          // Temporary  storing the login
          localStorage.setItem('userRID', this.result[0].user_rid);  
          localStorage.setItem('userName', this.result[0].user_name);     
        },
        (error) => {
          console.log(error)
        }
      );
  }
}