import { ProductAddPageComponent } from './product-add-page/product-add-page.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const PRODUCT_ROUTES = [
  {
    path: '',
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
        path: ':productId',
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
