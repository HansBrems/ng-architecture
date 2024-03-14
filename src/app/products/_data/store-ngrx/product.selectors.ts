import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from './product.reducer';

export const selectProductState =
  createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(
  selectProductState,
  (state) => state.products,
);

export const selectProduct = createSelector(
  selectProductState,
  (state) => state.product,
);

export const selectNewId = createSelector(
  selectProductState,
  (state) => state.newId,
);
