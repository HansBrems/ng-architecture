import { Injectable, inject } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { Product } from '../_data/product';
import { ProductService } from '../_data/product.service';
import { InsertProduct, LoadProduct, LoadProducts, UpdateProduct } from './product.actions';

interface ProductStateModel {
  products: Product[];
  product: Product | null;
}

const DEFAULT_PRODUCT_STATE: ProductStateModel = {
  products: [],
  product: null,
};

@Injectable()
@State<ProductStateModel>({
  name: 'product',
  defaults: DEFAULT_PRODUCT_STATE,
})
export class ProductState {
  private readonly productService = inject(ProductService);

  @Selector()
  static products(state: ProductStateModel) {
    return state.products;
  }

  @Selector()
  static product(state: ProductStateModel) {
    return state.product;
  }

  @Action(LoadProducts)
  loadProducts(ctx: StateContext<ProductStateModel>) {
    return this.productService.fetchProducts().pipe(
      tap((products) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          products,
        });
      }),
    );
  }

  @Action(LoadProduct)
  loadProduct(ctx: StateContext<ProductStateModel>, action: LoadProduct) {
    return this.productService.fetchProduct(action.id).pipe(
      tap((product) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          product,
        });
      }),
    );
  }

  @Action(InsertProduct)
  addProduct(ctx: StateContext<ProductStateModel>, action: InsertProduct) {
    return this.productService.insertProduct(action.product);
  }

  @Action(UpdateProduct)
  updateProduct(ctx: StateContext<ProductStateModel>, action: UpdateProduct) {
    return this.productService.updateProduct(action.product);
  }
}
