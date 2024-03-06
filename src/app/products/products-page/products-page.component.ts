import { Component, OnInit, inject } from '@angular/core';
import { ProductTableComponent } from './products-table/products-table.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectProducts } from '../_state/product.selectors';
import { productsPageActions } from '../_state/product.actions';

@Component({
  standalone: true,
  imports: [AsyncPipe, RouterLink, ProductTableComponent],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly store = inject(Store);

  products$ = this.store.select(selectProducts);

  ngOnInit() {
    this.store.dispatch(productsPageActions.loadProducts());
  }

  navigateToEditPage(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }
}
