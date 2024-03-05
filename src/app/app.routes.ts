import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { ProductEditPageComponent } from './products/product-edit-page/product-edit-page.component';
import { PageNotFoundComponent } from './not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'products/:id/edit',
    component: ProductEditPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
