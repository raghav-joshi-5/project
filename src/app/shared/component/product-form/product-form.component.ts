import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../services/uuid.service';
import { Ipro, ProductStatus } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @ViewChild('productForm') productForm!: NgForm;
  constructor(
    private _uuidService: UuidService,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    // const prodArr = localStorage.getItem('prodArr');
    // if (prodArr) {
    //   this._productService.prodArr = JSON.parse(prodArr);
    // } else {
    //   this._productService.prodArr = prodArr ? JSON.parse(prodArr) : [];
    // }
  }
  onProdAdd() {
    if (this.productForm.valid) {
      let prodObj: Ipro = {
        ...this.productForm.value,
        prodId: this._uuidService.generateUuid(),
        prodStatus: ProductStatus.InProgress,
      };
      console.log(prodObj);
      this.productForm.reset();
      this._productService.addprodArr(prodObj);
    }
  }
}
