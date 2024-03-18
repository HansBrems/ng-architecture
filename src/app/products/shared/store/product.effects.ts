import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getRouterSelectors } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, tap, withLatestFrom } from 'rxjs';

import { ProductService } from '../services/product.service';
import {
  productApiActions,
  productEditPageActions,
  productsPageActions,
} from './product.actions';
import { selectNewId } from './product.selectors';

export class ProductEffects {
  private readonly actions = inject(Actions);
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);
  private readonly store = inject(Store);

  routerSelectors = getRouterSelectors();

  loadProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.loadProduct),
      tap(() => console.log('load product effect')),
      withLatestFrom(
        this.store.select(this.routerSelectors.selectRouteParam('id')),
      ),
      exhaustMap(([, id]) => this.productService.fetchProduct(+id!)),
      map((product) => productApiActions.loadProductSuccess({ product })),
      catchError(() => of(productApiActions.loadProductError())),
    ),
  );

  loadProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(productsPageActions.loadProducts),
      exhaustMap(() => this.productService.fetchProducts()),
      map((products) => productApiActions.loadProductsSuccess({ products })),
      catchError(() => of(productApiActions.loadProductsError())),
    ),
  );

  insertProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.insertProduct),
      withLatestFrom(this.store.select(selectNewId)),
      exhaustMap(([action, newId]) =>
        this.productService.insertProduct({ ...action.product, id: newId }),
      ),
      map(() => productApiActions.insertProductSuccess()),
      catchError(() => of(productApiActions.insertProductError())),
      tap(() => this.router.navigate(['/products'])),
    ),
  );

  updateProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.updateProduct),
      exhaustMap((action) => this.productService.updateProduct(action.product)),
      map(() => productApiActions.updateProductSuccess()),
      catchError(() => of(productApiActions.updateProductError())),
      tap(() => this.router.navigate(['/products'])),
    ),
  );
}
