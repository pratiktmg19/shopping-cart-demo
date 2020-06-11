import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CartService} from '../cart.service';
import {products} from '../products'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;

  constructor( 
    private rotue: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.rotue.paramMap.subscribe(params =>{
      this.product = products[params.get('productId')];
    }
    );
  }
  addToCart(product){
    this.cartService.addToCart(product);
    window.alert("Product added to Cart");
  }

}
