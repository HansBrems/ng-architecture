import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { PageComponent } from '~/shared/components/layout/page/page.component';

import { OrderDetailsState } from './order-details.state';
import { OrdersState } from './orders.state';

@Component({
  standalone: true,
  templateUrl: './list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrdersState, OrderDetailsState],
  imports: [
    FormsModule,
    ButtonModule,
    DropdownModule,
    TranslocoPipe,
    PageComponent,
  ],
})
export class ListPage {
  readonly ordersState = inject(OrdersState);
  readonly orderDetailsState = inject(OrderDetailsState);
}
