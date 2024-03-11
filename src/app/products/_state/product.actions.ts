import { Product } from '../_data/product';

export class LoadProducts {
  static readonly type = '[Products] Load Products';
}

export class LoadProduct {
  static readonly type = '[Products] Load Product';
  constructor(public id: number) {}
}

export class InsertProduct {
  static readonly type = '[Products] Insert Product';
  constructor(public product: Product) {}
}

export class UpdateProduct {
  static readonly type = '[Products] Update Product';
  constructor(public product: Product) {}
}
