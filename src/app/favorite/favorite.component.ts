import { Component } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { RestaurantData } from '../model/restaurant-description';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  restaurantData:RestaurantData[]=[]

  constructor(private favoriteService:FavoriteService){}



  //to get all list of restaurants for a particular user
  ngOnInit(){
    this.favoriteService.getUserListOfResturant().subscribe({
      next:data=>{
        this.restaurantData=data;
        console.log(this.restaurantData)
      },
      error:error=>{
        alert("Failed to Fetch Restaurants Due to Server Error !!")
      }
    })
  }
}
