import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../site-layout/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }
  createProduct(productBody:object):Observable<Product>{
     const baseUrl="https://localhost:44315/api/product/addproduct"
     return  this.httpclient.post<Product>(baseUrl,productBody);    
    }

  viewProduct(productId:number):Observable<Product>{
      const baseUrl="https://localhost:44315/api/product/getproductbyid/"+productId;
      return  this.httpclient.get<Product>(baseUrl);   
     }
  searchCategoryProduct(CategoryId:number):Observable<Product>{
      const baseUrl="https://localhost:44315/api/category/findcategoryid/"+CategoryId;
      return  this.httpclient.get<Product>(baseUrl);   
     }
   getCategory(){
     const baseUrl="https://localhost:44315/api/category/getallcategory"
     return this.httpclient.get<Category>(baseUrl);
   }
  getProduct():Observable<Product>{
    const baseUrl="https://localhost:44315/api/product/getallproduct";
    return  this.httpclient.get<Product>(baseUrl);   
   }
  addcart(productId:number):Observable<Product>{
    const baseUrl="https://localhost:44315/api/product/addQ/"+productId;
     return this.httpclient.put<Product>(baseUrl,0);
   }
  removecart(productId:number):Observable<Product>{
    const baseUrl="https://localhost:44315/api/product/removeQ/"+productId;
     return this.httpclient.put<Product>(baseUrl,0);
   }
   addcustomer(customerBody:Object){
    const baseUrl="https://localhost:44315/api/customer/adddetails";
    return this.httpclient.post(baseUrl,customerBody);
   }

}
