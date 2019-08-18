import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  priceTotal(products);

priceTotal(products){
  let total =0;
  console.log("total");
  for(let product of products){
    console.log("product:"+product);
      total = product.price+total;
  }
}
} 



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/