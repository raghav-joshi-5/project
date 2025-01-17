import { Component, Input, OnInit } from '@angular/core';
import { Ipro, ProductStatus } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-status',
  templateUrl: './product-status.component.html',
  styleUrls: ['./product-status.component.scss'],
})
export class ProductStatusComponent implements OnInit {
  @Input() proObj!: Ipro;
  productStatus = ProductStatus;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {}
  productStatusUpdate(satus: ProductStatus) {
    this._productService.updateStatus(this.proObj.prodId, satus);
  }
}
