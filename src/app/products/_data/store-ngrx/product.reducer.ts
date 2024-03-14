import { createReducer, on } from '@ngrx/store';

import { Product } from '../product';
import { productApiActions, productEditPageActions } from './product.actions';

export interface ProductsState {
  products: Product[];
  product: Product | null;
  newId: number;
}

export const initialState: ProductsState = {
  products: [],
  product: null,
  newId: 0,
};

export const productReducer = createReducer(
  initialState,

  on(productApiActions.loadProductsSuccess, (state, action) => ({
    ...state,
    products: action.products,
    newId: action.products.length + 1,
  })),

  on(productEditPageActions.loadProduct, (state) => {
    console.log('load product reducer');
    return { ...state, product: null };
  }),

  on(productApiActions.loadProductSuccess, (state, action) => {
    console.log('load product success reducer');
    return { ...state, product: action.product };
  }),
);
