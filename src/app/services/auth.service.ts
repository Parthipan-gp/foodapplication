import { Injectable } from '@angular/core';
import { User} from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url:string="";

  logIn(user:User):Observable<User>{
   return this.http.post<User>(this.url,user)
  }


  isLoggedStatus=false;

  

  islogin(){
    return this.isLoggedStatus=true;
  }

  islogout(){
    return this.isLoggedStatus=false;
  }
}
