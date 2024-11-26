import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';

import { ProductService } from '../shared/services/product.service';
import { ProductTableComponent } from './products-table/products-table.component';

@Component({
  standalone: true,
  imports: [RouterLink, ButtonModule, TranslocoPipe, ProductTableComponent],
  templateUrl: './list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPage {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly productService = inject(ProductService);

  products = toSignal(this.productService.fetchProducts(), {
    initialValue: [],
  });

  navigateToEditPage(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }
}
