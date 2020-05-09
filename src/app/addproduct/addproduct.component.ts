import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  submitted = false;
  constructor(private service : ProductService) {

  }
  prod : Product = new Product();
  temp : Product = new Product();
  

  ngOnInit(): void {
  }

  addProduct()
  {
    console.log(this.prod);
    this.service.addProduct(this.prod).subscribe(data=>this.temp=data);
  }

  onSubmit(){
    this.submitted=true;
    this.addProduct();
  }
 

}


