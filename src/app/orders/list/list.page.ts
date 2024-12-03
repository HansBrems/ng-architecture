import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { Subject, switchMap } from 'rxjs';

import { StackComponent } from '~/shared/components/layout/stack/stack.component';

import { Order } from '../shared/models/order';
import { OrderService } from '../shared/services/order.service';

@Component({
  standalone: true,
  templateUrl: './list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ButtonModule, DropdownModule, StackComponent],
})
export class ListPage {
  private readonly orderService = inject(OrderService);

  readonly loadTrigger = new Subject<void>();

  orders = toSignal(this.orderService.getOrders());

  selectedOrder = signal<Order | null>(null);

  orderDetails = toSignal(
    this.loadTrigger.pipe(
      switchMap(() =>
        this.orderService.getOrder(this.selectedOrder()?.id ?? -1),
      ),
    ),
  );

  loadOrderDetail() {
    this.loadTrigger.next();
  }
}
