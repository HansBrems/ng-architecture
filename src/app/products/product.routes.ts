import { ProductAddPageComponent } from './product-add-page/product-add-page.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const ProductRoutes = [
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
