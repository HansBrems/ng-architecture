import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/order.routes').then((m) => m.ORDER_ROUTES),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/product.routes').then((m) => m.PRODUCT_ROUTES),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
