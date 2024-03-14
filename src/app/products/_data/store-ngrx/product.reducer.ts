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

const patchState = (state: ProductsState, patch: Partial<ProductsState>) => ({
  ...state,
  ...patch,
});

export const productReducer = createReducer(
  initialState,

  on(productApiActions.loadProductsSuccess, (state, { products }) =>
    patchState(state, { products: products, newId: products.length + 1 }),
  ),

  on(productEditPageActions.loadProduct, (state) => ({
    ...state,
    product: null,
  })),

  on(productApiActions.loadProductSuccess, (state, { product }) => ({
    ...state,
    product,
  })),

  on(productApiActions.updateProductSuccess, (state) => patchState(state, {})),
);
