import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { Store } from '@ngxs/store';
import { ButtonModule } from 'primeng/button';

import { LoadProducts } from '../_state/product.actions';
import { ProductState } from '../_state/product.state';
import { ProductTableComponent } from './products-table/products-table.component';

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    ButtonModule,
    TranslocoPipe,
    ProductTableComponent,
  ],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly store = inject(Store);

  products$ = this.store.select(ProductState.products$);

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }

  navigateToEditPage(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }
}
