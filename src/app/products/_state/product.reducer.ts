import { createReducer, on } from '@ngrx/store';

import { Product } from '../_data/product';
import { productApiActions, productEditPageActions, productsPageActions } from './product.actions';

export interface ProductsState {
  products: Product[];
  currentProduct: Product | null;
  newId: number;
}

export const initialState: ProductsState = {
  products: [],
  currentProduct: null,
  newId: 0,
};

export const productsReducer = createReducer(
  initialState,
  on(productsPageActions.loadProducts, (state) => ({
    ...state,
    products: [],
  })),
  on(productApiActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    newId: products.length + 1,
  })),
  on(productEditPageActions.loadProduct, (state) => ({
    ...state,
    currentProduct: null,
  })),
  on(productApiActions.loadProductSuccess, (state, { product }) => ({
    ...state,
    currentProduct: product,
  })),
);
