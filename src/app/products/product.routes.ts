import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { ProductAddPageComponent } from './product-add-page/product-add-page.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductEffects } from './shared/store/product.effects';
import { productReducer } from './shared/store/product.reducer';

export const ProductRoutes = [
  {
    path: '',
    providers: [
      provideState({ name: 'products', reducer: productReducer }),
      provideEffects(ProductEffects),
    ],
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
