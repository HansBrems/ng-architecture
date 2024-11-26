import { AddPage } from './add/add.page';
import { EditPage } from './edit/edit.page';
import { ListPage } from './list/list.page';

export const PRODUCT_ROUTES = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListPage,
      },
      {
        path: 'add',
        component: AddPage,
      },
      {
        path: ':productId',
        children: [
          {
            path: 'edit',
            component: EditPage,
          },
        ],
      },
    ],
  },
];
