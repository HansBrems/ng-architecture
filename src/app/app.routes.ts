import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { ProductEditPageComponent } from './products/product-edit-page/product-edit-page.component';
import { PageNotFoundComponent } from './not-found/page-not-found.component';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffects } from './products/_state/product.effects';
import { productsReducer } from './products/_state/product.reducer';

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
