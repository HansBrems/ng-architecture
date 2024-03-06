import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, of } from 'rxjs';
import { productsPageActions, productApiActions, productEditPageActions } from './product.actions';
import { ProductService } from '../_data/product.service';

@Injectable()
export class ProductsEffects {
  private readonly actions = inject(Actions);
  private readonly productService = inject(ProductService);

  loadProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.loadProduct),
      concatMap((action) =>
        this.productService.fetchProduct(action.id).pipe(
          map((product) => productApiActions.loadProductSuccess({ product })),
          catchError((error) => of(productApiActions.loadProductError()))
        )
      )
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(productsPageActions.loadProducts),
      exhaustMap(() =>
        this.productService.fetchProducts().pipe(
          map((products) => productApiActions.loadProductsSuccess({ products })),
          catchError((error) => of(productApiActions.loadProductsError()))
        )
      )
    )
  );

  saveProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(productEditPageActions.saveProduct),
      exhaustMap((action) =>
        this.productService.saveProduct(action.product).pipe(
          map(() => productApiActions.saveProductSuccess()),
          catchError((error) => of(productApiActions.saveProductError()))
        )
      )
    )
  );
}
