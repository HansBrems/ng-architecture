import { Injectable, inject } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductApiActions } from './product.actions';
import { ProductEditPageActions, ProductsPageActions } from './product.actions';

export interface ProductStateModel {
  products: Product[];
  product: Product | null;
}

const DEFAULT_PRODUCT_STATE: ProductStateModel = {
  products: [],
  product: null,
};

type ProductContext = StateContext<ProductStateModel>;

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

  @Action(ProductsPageActions.LoadProducts)
  loadProducts({ dispatch }: ProductContext) {
    return this.productService
      .fetchProducts()
      .pipe(
        tap((products) =>
          dispatch(new ProductApiActions.LoadProductsSuccess(products)),
        ),
      );
  }

  @Action(ProductApiActions.LoadProductsSuccess)
  loadProductsSuccess(
    { patchState }: ProductContext,
    { products }: ProductApiActions.LoadProductsSuccess,
  ) {
    patchState({ products: products });
  }

  @Action(ProductEditPageActions.LoadProduct)
  loadProduct(
    { dispatch }: ProductContext,
    action: ProductEditPageActions.LoadProduct,
  ) {
    return this.productService
      .fetchProduct(action.id)
      .pipe(
        tap((product) =>
          dispatch(new ProductApiActions.LoadProductSuccess(product)),
        ),
      );
  }

  @Action(ProductApiActions.LoadProductSuccess)
  loadProductSuccess(
    { patchState }: ProductContext,
    action: ProductApiActions.LoadProductSuccess,
  ) {
    patchState({ product: action.product });
  }

  @Action(ProductEditPageActions.InsertProduct)
  addProduct(_: ProductContext, action: ProductEditPageActions.InsertProduct) {
    return this.productService.insertProduct(action.product);
  }

  @Action(ProductEditPageActions.UpdateProduct)
  updateProduct(
    _: ProductContext,
    action: ProductEditPageActions.UpdateProduct,
  ) {
    return this.productService.updateProduct(action.product);
  }
}
