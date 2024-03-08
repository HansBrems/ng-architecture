import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { ProductService } from '../_data/product.service';
import { productApiActions, productEditPageActions, productsPageActions } from './product.actions';

@Injectable()
export class ProductsEffects {
  private readonly actions = inject(Actions);
  private readonly productService = inject(ProductService);

  loadProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.loadProduct),
      exhaustMap((action) =>
        this.productService.fetchProduct(action.id).pipe(
          map((product) => productApiActions.loadProductSuccess({ product })),
          catchError(() => of(productApiActions.loadProductError())),
        ),
      ),
    ),
  );

  loadProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(productsPageActions.loadProducts),
      exhaustMap(() =>
        this.productService.fetchProducts().pipe(
          map((products) => productApiActions.loadProductsSuccess({ products })),
          catchError(() => of(productApiActions.loadProductsError())),
        ),
      ),
    ),
  );

  saveProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.saveProduct),
      exhaustMap((action) =>
        this.productService.saveProduct(action.product).pipe(
          map(() => productApiActions.saveProductSuccess()),
          catchError(() => of(productApiActions.saveProductError())),
        ),
      ),
    ),
  );
}
