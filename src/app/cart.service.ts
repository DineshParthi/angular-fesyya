import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[];

  constructor(
    private httpClient:HttpClient
  ){

  }

  addToCart(product){
    this.items.push(product);
    window.alert("Your product has been added to the cart")
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
  }

  getShippingPrices(){
    return this.httpClient.get('/assets/shipping.json')
  }

}