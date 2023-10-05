import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFavorite } from '../model/userfavorite';
import { Observable } from 'rxjs';
import { RestaurantData } from '../model/restaurant-description';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:8087/api/v2/register"                   //same url for both of the services

  registerUser(user:UserFavorite):Observable<UserFavorite>{            //on submit in resgister component
    return this.http.post<UserFavorite>(this.url,user)
  }

  getUserListOfResturant():Observable<RestaurantData[]>{    // ngOnInit of fav component   
    return this.http.get<RestaurantData[]>(this.url)
  }

}
