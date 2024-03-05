import { Component, OnInit, inject } from '@angular/core';
import { ProductTableComponent } from './products-table/products-table.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { StateService } from '../../state/state.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, RouterLink, ProductTableComponent],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly store = inject(StateService);

  products$ = this.store.products.products$;

  ngOnInit() {
    this.store.products.loadProducts();
  }

  navigateToEditPage(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }
}
