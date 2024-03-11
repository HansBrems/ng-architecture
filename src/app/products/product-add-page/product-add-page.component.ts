import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { Store } from '@ngxs/store';

import { Product } from '../_data/product';
import { InsertProduct } from '../_state/product.actions';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  standalone: true,
  imports: [TranslocoPipe, ProductFormComponent],
  templateUrl: './product-add-page.component.html',
})
export class ProductAddPageComponent {
  readonly router = inject(Router);
  private readonly store = inject(Store);

  product: Product = {
    name: '',
    price: 0,
  };

  save(product: Product): void {
    this.store
      .dispatch(new InsertProduct(product))
      .subscribe(() => this.router.navigate(['products']));
  }
}
