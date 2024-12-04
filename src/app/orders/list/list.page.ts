import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { OrderDetailsState } from './order-details.state';
import { OrdersState } from './orders.state';

@Component({
  standalone: true,
  templateUrl: './list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrdersState, OrderDetailsState],
  imports: [FormsModule, ButtonModule, DropdownModule],
})
export class ListPage {
  readonly ordersState = inject(OrdersState);
  readonly orderDetailsState = inject(OrderDetailsState);
}
