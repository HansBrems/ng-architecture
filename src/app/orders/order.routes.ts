import { OrdersPageComponent } from './orders-page/orders-page.component';

export const ORDER_ROUTES = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        component: OrdersPageComponent,
      },
    ],
  },
];
