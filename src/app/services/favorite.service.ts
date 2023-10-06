import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFavorite } from '../model/userfavorite';
import { Observable } from 'rxjs';
import { RestaurantData } from '../model/restaurant-description';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:9000/api/v2/register"                   

  registerUser(user:UserFavorite):Observable<UserFavorite>{            //on submit in resgister component
    return this.http.post<UserFavorite>(this.url,user)
  }



  urlPost:string="http://localhost:9000/api/v2/user/save"

  saveRestaurantToUser(restaurant:RestaurantData,token:any):Observable<any>{
    return this.http.post<User>(this.urlPost,restaurant,token)
  }

  urlGet:string="http://localhost:9000/api/v2/user/get"

  getUserListOfResturant():Observable<RestaurantData[]>{              // ngOnInit of fav component   
    return this.http.get<RestaurantData[]>(this.urlGet)
  }

}
