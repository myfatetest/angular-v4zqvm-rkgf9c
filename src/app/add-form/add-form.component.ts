import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup} from '@angular/forms';
import { products } from '../products';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  products = [];
  form: FormGroup;  
  quantity = [];
  price: 0;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      products: [''],
      quantity: [''],
      price:0
    });
    this.quantity = this.getQuantities();
    this.products = products;
    this.price = this.products[0].price; 
    this.form.controls.quantity.patchValue(this.quantity[0].id);
    this.form.controls.products.patchValue(this.products[0].id);
    this.form.controls.price.patchValue(this.price);
    
    console.log("");
    }
     ngOnInit() {
      
     }
   getQuantities() {
    return [
      { id: '1', name: '1' },
      { id: '2', name: '2' },
      { id: '3', name: '3' },
      { id: '4', name: '4' }
    ];
  }

  addProduct() {
    console.log(this.form.value)
  }

}