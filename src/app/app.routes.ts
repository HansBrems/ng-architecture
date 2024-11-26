import { Routes } from '@angular/router';

import { NotFoundPage } from './not-found/not-found.page';

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
    component: NotFoundPage,
  },
];
