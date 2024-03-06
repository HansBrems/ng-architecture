import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './product.reducer';

export const selectProductsState = createFeatureSelector<ProductsState>('products');
export const selectProducts = createSelector(selectProductsState, (state) => state.products);
export const selectCurrentProduct = createSelector(
  selectProductsState,
  (state) => state.currentProduct
);
