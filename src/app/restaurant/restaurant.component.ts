import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantData } from '../model/restaurant-description';
import { RestaurantService } from '../services/restaurant.service';
import { AuthService } from '../services/auth.service';
import { FavoriteService } from '../services/favorite.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  restaurant:RestaurantData={}

  constructor(private ar :ActivatedRoute,private restaurantService:RestaurantService, public authService:AuthService,private favoriteService:FavoriteService,private mb:MatSnackBar){}

  ngOnInit(){
    this.ar.paramMap.subscribe((data)=>{
      let id=data.get('id')??0
      console.log(id)
      this.restaurantService.getDataForId(+id).subscribe((data)=>{
        console.log(`restaurant data for 1 id`)
        this.restaurant=data
        console.log(this.restaurant)
      })
    })
  }

  // token:any=localStorage.getItem('token')  // reteiving the token from the web browser, to pass it as a parameter , since here we are  accessing a protected method in backend

  addToFavorites(){        //passing the restaurant object and token as parameter
      
    this.favoriteService.saveRestaurantToUser(this.restaurant).subscribe({  // calling the method inside fav service
      next:data=>{
        this.mb.open('Restaurants successfully added!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
    })
  }





}
