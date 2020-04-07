import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  arr : Product [] =[];
  prod : Product = new Product();
  constructor(private service : ProductService)
  {
    //service.getAllProducts().subscribe( data =>this.arr=data);
    service.getAllProducts().subscribe( data =>{this.arr = data.body;
    console.log(data);
    })
  }

  delete(productId : number)
  {
    this.service.deleteProductById(productId).subscribe(data=>this.prod=data);
    //this.service.getAllProducts().subscribe( data => this.arr=data);
    this.service.getAllProducts().subscribe( data => this.arr=data.body);
  }

  ngOnInit(): void {
  }
}
