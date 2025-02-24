import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';

import { PageComponent } from '~/shared/components/layout/page/page.component';
import { StackComponent } from '~/shared/components/layout/stack/stack.component';

import { ProductHubService } from '../shared/services/product-hub.service';
import { ProductNavigationService } from '../shared/services/product-navigation.service';
import { ProductStateService } from '../shared/services/product-state.service';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductsTableComponent } from './products-table/products-table.component';

@Component({
  standalone: true,
  imports: [
    ButtonModule,
    TranslocoPipe,
    StackComponent,
    PageComponent,
    ProductFilterComponent,
    ProductsTableComponent,
  ],
  templateUrl: './list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPage {
  readonly navigationService = inject(ProductNavigationService);
  readonly productStateService = inject(ProductStateService);
  readonly productHubService = inject(ProductHubService);

  filter = toSignal(this.productStateService.productFilter$, {
    initialValue: '',
  });

  products = toSignal(this.productStateService.products$, {
    initialValue: [],
  });

  applyFilter(filterText: string) {
    this.productStateService.setProductFilter(filterText);
  }

  testSignalRConnection() {
    this.productHubService.connect();
  }
}
