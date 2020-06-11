import { Component, OnInit } from '@angular/core';
import {products} from '../products'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }
  onShare(){
    window.alert("Has been Shared")
  }
  onNotify(){
    window.alert("You will be notified when the product is on the sale");
  }

}
