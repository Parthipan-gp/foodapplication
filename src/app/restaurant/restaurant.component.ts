import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantData } from '../model/restaurant-description';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  restaurant:RestaurantData={}

  constructor(private ar :ActivatedRoute,private restaurantService:RestaurantService){}

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





}
