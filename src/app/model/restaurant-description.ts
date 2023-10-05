import { address } from "../model/address";
import { dish } from "../model/dish";
export type RestaurantData={

    restaurantId?:number,
    restaurantName?:string,
    location?:string,
    cuisine?:string
    image?:string,
    rating?:number
    address?: address,
    dishlist?:dish
}