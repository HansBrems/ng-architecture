import { Product } from '../product';

export namespace ProductsPageActions {
  export class LoadProducts {
    static readonly type = '[Products Page] Load Products';
  }
}

export namespace ProductEditPageActions {
  export class LoadProduct {
    static readonly type = '[Product Edit Page] Load Product';
    constructor(public id: number) {}
  }

  export class InsertProduct {
    static readonly type = '[Product Edit Page] Insert Product';
    constructor(public product: Product) {}
  }

  export class UpdateProduct {
    static readonly type = '[Product Edit Page] Update Product';
    constructor(public product: Product) {}
  }
}

export namespace ProductApiActions {
  const source = 'Product API';

  export class LoadProductsSuccess {
    static readonly type = `${source} Load Products Success`;
    constructor(public products: Product[]) {}
  }

  export class LoadProductsFail {
    static readonly type = '[Product API] Load Products Fail';
    constructor(public error: string) {}
  }

  export class LoadProductSuccess {
    static readonly type = '[Product API] Load Product Success';
    constructor(public product: Product) {}
  }

  export class LoadProductFail {
    static readonly type = '[Product API] Load Product Fail';
    constructor(public error: string) {}
  }

  export class UpdateProductSuccess {
    static readonly type = '[Product API] Update Product Success';
    constructor(public product: Product) {}
  }

  export class UpdateProductFail {
    static readonly type = '[Product API] Update Product Fail';
    constructor(public error: string) {}
  }
}
