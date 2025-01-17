import { Component, inject, OnInit } from '@angular/core';
import { Ipro } from './shared/component/models/product';
import { ProductService } from './shared/component/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // constructor(private _productService: ProductService) {}

  private _productService = inject(ProductService);
  ngOnInit(): void {
    this.prodArr = this._productService.fetchAllprod();
  }
  title = 'project';
  prodArr: Array<Ipro> = [];
}
