import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  prod : Product = new Product();
  temp : Product = new Product();
  constructor(private service : ProductService) { }

  ngOnInit(): void {
  }

  addProduct()
  {
    console.log(this.prod);
    this.service.addProduct(this.prod).subscribe(data=>this.temp=data);
  }

}
