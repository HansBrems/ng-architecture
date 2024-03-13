import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { ProductState } from './_data/store-ngxs/product.state';
import { ProductAddPageComponent } from './product-add-page/product-add-page.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const ProductRoutes = [
  {
    path: '',
    providers: [importProvidersFrom(NgxsModule.forFeature([ProductState]))],
    children: [
      {
        path: '',
        component: ProductsPageComponent,
      },
      {
        path: 'add',
        component: ProductAddPageComponent,
      },
      {
        path: ':id',
        children: [
          {
            path: 'edit',
            component: ProductEditPageComponent,
          },
        ],
      },
    ],
  },
];
