import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { ProductEffects } from './_data/store-ngrx/product.effects';
import { productReducer } from './_data/store-ngrx/product.reducer';
import { ProductAddPageComponent } from './product-add-page/product-add-page.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const ProductRoutes = [
  {
    path: '',
    providers: [
      provideState({ name: 'products', reducer: productReducer }),
      provideEffects(ProductEffects),
      //importProvidersFrom(NgxsModule.forFeature([ProductState]))
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
