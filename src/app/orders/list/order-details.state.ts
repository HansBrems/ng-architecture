import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { derivedAsync } from 'ngxtension/derived-async';
import { Subject, filter, switchMap } from 'rxjs';

import { OrderService } from '../shared/services/order.service';

@Injectable()
export class OrderDetailsState {
  private readonly orderService = inject(OrderService);

  private readonly selectedOrderId$ = new Subject<number | null>();
  selectedOrderId = toSignal(this.selectedOrderId$, {
    initialValue: null,
  });

  readonly orderDetails = toSignal(
    this.selectedOrderId$.pipe(
      filter((id) => id !== null),
      switchMap((id) => this.orderService.getOrder(id)),
    ),
    { initialValue: null },
  );

  // The same but with derivedAsync.
  // This will only trigger a refetch if the order ID is different from the last emitted value.
  // readonly orderDetails = derivedAsync(
  //   () => {
  //     const id = this.selectedOrderId();
  //     return id === null ? of(null) : this.orderService.getOrder(id);
  //   },
  //   { initialValue: null, requireSync: true },
  // );

  selectOrder(orderId: number | null) {
    const randomId = Math.floor(Math.random() * 5);
    this.selectedOrderId$.next(randomId);
  }
}
