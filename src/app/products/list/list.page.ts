import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';

import { StackComponent } from '~/shared/components/layout/stack/stack.component';

import { ProductStateService } from '../shared/services/product-state.service';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductsTableComponent } from './products-table/products-table.component';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    ButtonModule,
    TranslocoPipe,
    StackComponent,
    ProductFilterComponent,
    ProductsTableComponent,
  ],
  templateUrl: './list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPage {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly productStateService = inject(ProductStateService);

  filter = toSignal(this.productStateService.productFilter$, {
    initialValue: '',
  });

  products = toSignal(this.productStateService.products$, {
    initialValue: [],
  });

  applyFilter(filterText: string) {
    this.productStateService.setProductFilter(filterText);
  }

  navigateToEditPage(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }
}
