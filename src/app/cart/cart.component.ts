import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder:FormBuilder
    ) { 
      this.items=cartService.getItems()
      this.checkoutForm=formBuilder.group({
        name:'',
        address:''
      })
     }

  onSubmit(customerData){
    console.warn("Your order has been submitted",customerData)
    this.checkoutForm.reset();
    this.cartService.clearCart();
  }
  ngOnInit() {
    
  }

}