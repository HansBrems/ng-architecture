import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { StackComponent } from '~/shared/components/layout/stack/stack.component';

import { OrderDetailsState } from './order-details.state';
import { OrdersState } from './orders.state';

@Component({
  standalone: true,
  templateUrl: './list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrdersState, OrderDetailsState],
  imports: [FormsModule, ButtonModule, DropdownModule, StackComponent],
})
export class ListPage {
  private readonly ordersState = inject(OrdersState);
  private readonly orderDetailsState = inject(OrderDetailsState);

  orders = this.ordersState.orders;
  orderDetails = this.orderDetailsState.orderDetails;
  selectedOrderId = signal<number | null>(
    this.orderDetailsState.selectedOrderId(),
  );

  loadOrderDetails() {
    this.orderDetailsState.selectOrder(this.selectedOrderId());
  }
}
