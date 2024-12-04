import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject, filter, switchMap, withLatestFrom } from 'rxjs';

import { OrderService } from '../shared/services/order.service';

@Injectable()
export class OrderDetailsState {
  private readonly orderService = inject(OrderService);

  private readonly fetchTrigger$ = new Subject<void>();
  private readonly selectedOrderId$ = new Subject<number | null>();

  readonly selectedOrderId = toSignal(this.selectedOrderId$, {
    initialValue: null,
  });

  readonly orderDetails = toSignal(
    this.fetchTrigger$.pipe(
      withLatestFrom(this.selectedOrderId$),
      filter(([, id]) => id !== null),
      switchMap(([, id]) => this.orderService.getOrder(id!)),
    ),
    { initialValue: null },
  );

  fetch() {
    this.fetchTrigger$.next();
  }

  selectOrder(orderId: number | null) {
    this.selectedOrderId$.next(orderId);
  }
}
