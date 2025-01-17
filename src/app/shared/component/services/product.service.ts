import { Injectable } from '@angular/core';
import { Ipro, ProductStatus } from '../models/product';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  storedData = localStorage.getItem('prodArr');
  prodArr = this.storedData
    ? JSON.parse(this.storedData)
    : // prodArr: Array<Ipro> =
      [
        {
          productName: 'samsung',
          productDetails:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint?',
          prodStatus: ProductStatus.InProgress,
          prodId: '123',
        },
        {
          productName: 'iphone',
          productDetails:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint?',
          prodStatus: ProductStatus.Delivered,
          prodId: '124',
        },
        {
          productName: 'oppo',
          productDetails:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint?',
          prodStatus: ProductStatus.Dispatched,
          prodId: '125',
        },
      ];
  constructor(private _snackBar: SnackbarService) {}

  fetchAllprod(): Array<Ipro> {
    return this.prodArr;
  }

  addprodArr(prod: Ipro) {
    //store into localstorage
    this.prodArr.unshift(prod);
    localStorage.setItem('prodArr', JSON.stringify(this.prodArr));
    this._snackBar.openSnackBar(
      `the ${prod.productName} is added successfully`
    );
  }

  updateStatus(prodId: string, updateStatus: ProductStatus) {
    let getIndex = this.prodArr.findIndex(
      (prod: { prodId: string }) => prod.prodId === prodId
    );
    this.prodArr[getIndex].prodStatus = updateStatus;
    this._snackBar.openSnackBar(
      `the ${this.prodArr[getIndex].productName} product status is updated to ${updateStatus}`
    );
  }
}
