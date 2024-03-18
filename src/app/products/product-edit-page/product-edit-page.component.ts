import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { deepClone } from '../../shared/utils/deep-clone';
import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { Product } from '../shared/models/product';
import { productEditPageActions } from '../shared/store/product.actions';
import { selectProduct } from '../shared/store/product.selectors';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, FormsModule, ProductFormComponent],
  templateUrl: './product-edit-page.component.html',
})
export class ProductEditPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly store = inject(Store);

  productVm$ = this.store
    .select(selectProduct)
    .pipe(map((product) => deepClone(product)));

  ngOnInit(): void {
    this.store.dispatch(productEditPageActions.loadProduct());
  }

  save(product: Product) {
    this.store.dispatch(productEditPageActions.updateProduct({ product }));
  }
}
