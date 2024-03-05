import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { map } from 'rxjs';
import { deepClone } from '../../shared/utils/deep-clone';
import { Product } from '../_data/product';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../state/state.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, FormsModule, ProductFormComponent],
  templateUrl: './product-edit-page.component.html',
})
export class ProductEditPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly store = inject(StateService);

  productVm$ = this.store.products.currentProduct$.pipe(
    map((product) => deepClone(product))
  );

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.products.loadProduct(+id!);
  }

  async save(product: Product) {
    await this.store.products.saveProduct(product);
    this.router.navigate(['/products']);
  }
}
