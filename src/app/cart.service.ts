import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private http:HttpClient ) { }

  addToCart(product){
    this.items.push(product);
  }
  showCart(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getShoppingCarts(){
    return this.http.get('../assets/shipping.json');
  }
}

