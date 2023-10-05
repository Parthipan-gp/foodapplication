import { Component } from '@angular/core';
import { RestaurantData } from '../model/restaurant-description';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private restaurantService:RestaurantService){}

  restaurant:RestaurantData[]=[]


  ngOnInit(){
   this.restaurantService.getData().subscribe({
    next:data=>{
      this.restaurant=data
    },
    error: error=>{
      alert("Failed to Fetch Restaurants Due to Server Error !!")
    }
   })
  }


  searchRestaurant(searchText:string){

    if(searchText==""){
      this.restaurant=this.restaurant
    }
    else{
      this.restaurantService.getData().subscribe((filteredRestaurant)=>{
        this.restaurant=filteredRestaurant.filter(restaurant=>{
          restaurant.location?.toLowerCase().startsWith(searchText.toLowerCase())
        })
      })
    }

  }

  


}
