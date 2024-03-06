import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { map } from 'rxjs';
import { deepClone } from '../../shared/utils/deep-clone';
import { Product } from '../_data/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentProduct } from '../_state/product.selectors';
import { productEditPageActions } from '../_state/product.actions';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, FormsModule, ProductFormComponent],
  templateUrl: './product-edit-page.component.html',
})
export class ProductEditPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly store = inject(Store);

  productVm$ = this.store.select(selectCurrentProduct).pipe(map((product) => deepClone(product)));

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(productEditPageActions.loadProduct({ id: +id! }));
  }

  cancel() {
    this.router.navigate(['/products']);
  }

  save(product: Product) {
    this.store.dispatch(productEditPageActions.saveProduct({ product }));
    this.router.navigate(['/products']);
  }
}
