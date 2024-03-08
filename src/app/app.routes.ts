import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { PageNotFoundComponent } from './not-found/page-not-found.component';
import { ProductsEffects } from './products/_state/product.effects';
import { productsReducer } from './products/_state/product.reducer';
import { ProductEditPageComponent } from './products/product-edit-page/product-edit-page.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsPageComponent,
    providers: [
      provideState({ name: 'products', reducer: productsReducer }),
      provideEffects(ProductsEffects),
    ],
  },
  {
    path: 'products/:id/edit',
    component: ProductEditPageComponent,
    providers: [
      provideState({ name: 'products', reducer: productsReducer }),
      provideEffects(ProductsEffects),
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
