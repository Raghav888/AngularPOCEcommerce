import { ProductService } from 'src/app/products/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms'
import { Product } from 'src/app/products/product';
import * as delay from 'delay';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderList: Product| any;
  total=0;    
  private value: Product| any;

  profileForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    billingAddress: new FormControl(''),
    defaultAddress: new FormControl(''),
    country: new FormControl('')  
  });
  
  constructor(private productService:ProductService) { }
  
  ngOnInit(): void {
    delay(2000);
    this.productService.getProduct().subscribe(data=>{
      this.orderList=data;
      this.findsum(this.orderList);
      console.log(data);
    })
  }

  onSubmit() {
    this.profileForm.value.defaultAddress=this.profileForm.value.billingAddress;
    this.productService.addcustomer(this.profileForm.value).subscribe(data=>{
      console.log(data);
    })

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