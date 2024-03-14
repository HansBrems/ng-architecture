import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';

import { ProductService } from '../product.service';
import {
  productApiActions,
  productEditPageActions,
  productsPageActions,
} from './product.actions';
import { selectNewId } from './product.selectors';

export class ProductEffects {
  private readonly actions = inject(Actions);
  private readonly productService = inject(ProductService);
  private readonly store = inject(Store);

  loadProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.loadProduct),
      exhaustMap((action) => {
        console.log('load product effect');
        return this.productService.fetchProduct(action.id).pipe(
          map((product) => productApiActions.loadProductSuccess({ product })),
          catchError(() => of(productApiActions.loadProductError())),
        );
      }),
    ),
  );

  loadProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(productsPageActions.loadProducts),
      exhaustMap(() =>
        this.productService.fetchProducts().pipe(
          map((products) =>
            productApiActions.loadProductsSuccess({ products }),
          ),
          catchError(() => of(productApiActions.loadProductsError())),
        ),
      ),
    ),
  );

  insertProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.insertProduct),
      withLatestFrom(this.store.select(selectNewId)),
      exhaustMap(([action, newId]) =>
        this.productService
          .insertProduct({ ...action.product, id: newId })
          .pipe(map(() => productApiActions.insertProductSuccess())),
      ),
    ),
  );

  updateProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.updateProduct),
      exhaustMap((action) =>
        this.productService.updateProduct(action.product).pipe(
          map(() => productApiActions.updateProductSuccess()),
          catchError(() => of(productApiActions.updateProductError())),
        ),
      ),
    ),
  );
}
