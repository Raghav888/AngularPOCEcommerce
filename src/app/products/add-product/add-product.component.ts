import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: { value: any; }){
    console.log(form.value);
    let newProduct={
  productId:form.value.product_id,
  sku: String(0),
  productName: form.value.product_name,
  price: form.value.price,
  descriptionP: form.value.product_description,
  image: form.value.url,
  stock: 0,
  catergoryId: Number(form.value.Categoryid)
    };
    console.log(newProduct);
    this.productservice.createProduct(newProduct).subscribe(data=>{
      console.log(data);
    })
  }
}
