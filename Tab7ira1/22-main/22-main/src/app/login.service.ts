import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/User.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost/Tab7ira/login.php";
  checkUser(u:User){
    return this.http.post(this.url,u);
  }

  constructor(public http:HttpClient) { }
}
