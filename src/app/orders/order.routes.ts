import { ListPage } from './list/list.page';

export const ORDER_ROUTES = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListPage,
      },
    ],
  },
];
