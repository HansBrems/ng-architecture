import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () => import('./products/product.routes').then((m) => m.ProductRoutes),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
