import { ProductService } from './../product.service';
import { Product } from './../product';
import { Category } from './../../site-layout/Category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as delay from 'delay';

@Component({
  selector: 'app-viewbycategory-product',
  templateUrl: './viewbycategory-product.component.html',
  styleUrls: ['./viewbycategory-product.component.css']
})
export class ViewbycategoryProductComponent implements OnInit {
  searchCategory=0;
  productList: Product | any;
  constructor(private activatedRoute: ActivatedRoute, private productservice: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.searchCategory=data.id;
      console.log(data.id);})
      this.productservice.searchCategoryProduct(this.searchCategory).subscribe(categorydata=>{
        this.productList=categorydata;
      })
    }
    addToCart(id:number){
      for(let j=0;j<this.productList.length;j++){   
        if(this.productList[j].productId==id){
          this.productList[j].sku+=1;
          break;
        } }
       this.productservice.addcart(id).subscribe();
       delay(2000);
    }
     removeFromCart(id:number){
      for(let j=0;j<this.productList.length;j++){   
        if(this.productList[j].productId==id){
          if(this.productList[j].sku>0){
          this.productList[j].sku-=1;
          break;
          }
        } 
      }
     this.productservice.removecart(id).subscribe();
     delay(2000);
    }
  }


