import { Component, OnInit } from '@angular/core';
import * as delay from 'delay';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderList: Product| any;
  total=0;    
  private value: Product| any;
  constructor(private productservice: ProductService) { 
  }
  
  ngOnInit(): void {
    delay(2000);
    this.productservice.getProduct().subscribe(data=>{
      this.orderList=data;
      this.findsum(this.orderList);
      console.log(data);
    })
  }
   addToCart(id:number){
    for(let j=0;j<this.orderList.length;j++){   
      if(this.orderList[j].productId==id){
        this.orderList[j].sku+=1;
        this.productservice.addcart(id).subscribe();
        break;
      } 
    }
 
    this.findsum(this.orderList)
  }

   removeFromCart(id:number){
    for(let j=0;j<this.orderList.length;j++){   
      if(this.orderList[j].productId==id){
        if(this.orderList[j].sku>0){
        this.orderList[j].sku-=1;
        this.productservice.removecart(id).subscribe();
        break;
        }
      } 
    }
    this.findsum(this.orderList)
  
  }


  findsum(data1: Product| any){    
   this.total=0
    this.value=data1  
    console.log(this.value);  
    for(let j=0;j<data1.length;j++){   
         this.total+= this.value[j].price*this.value[j].sku;
         console.log(this.total)  
    }  
  }
}
