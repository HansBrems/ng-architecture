import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { OrderService } from '../shared/services/order.service';

@Injectable()
export class OrdersState {
  private readonly orderService = inject(OrderService);

  orders = toSignal(this.orderService.getOrders(), { initialValue: [] });
}
