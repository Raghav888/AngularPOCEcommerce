import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import * as delay from 'delay';

@Component({
  selector: 'app-viewall-product',
  templateUrl: './viewall-product.component.html',
  styleUrls: ['./viewall-product.component.css']
})
export class ViewallProductComponent implements OnInit {
  productList: Product| any;
  constructor(private productservice: ProductService) { 
  }
  
  ngOnInit(): void {
    this.productservice.getProduct().subscribe(data=>{
      this.productList=data;
    })
  }
   addToCart(id:number){
    for(let j=0;j<this.productList.length;j++){   
      if(this.productList[j].productId==id){
        this.productList[j].sku+=1;
        this.productservice.addcart(id).subscribe();
        break;
      } }
  
     delay(2000);       
  }
   removeFromCart(id:number){
    for(let j=0;j<this.productList.length;j++){   
      if(this.productList[j].productId==id){
        if(this.productList[j].sku>0){
        this.productList[j].sku-=1;
        this.productservice.removecart(id).subscribe();
        break;
        }
      } 
    }
   
   delay(2000);
  }
}
