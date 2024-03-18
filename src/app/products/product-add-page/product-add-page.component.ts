import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { Store } from '@ngrx/store';

import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { Product } from '../shared/models/product';
import { productEditPageActions } from '../shared/store/product.actions';

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
    this.store.dispatch(productEditPageActions.insertProduct({ product }));
  }
}
