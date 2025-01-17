export interface Ipro {
  productName: string;
  productDetails: string;
  prodId: string;
  prodStatus: ProductStatus;
}

export enum ProductStatus {
  InProgress = 'In Progress',
  Dispatched = 'Dispatched',
  Delivered = 'Delivered',
}
