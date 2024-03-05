import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../_data/product.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { map } from 'rxjs';
import { deepClone } from '../../shared/utils/deep-clone';
import { Product } from '../_data/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, FormsModule, ProductFormComponent],
  templateUrl: './product-edit-page.component.html',
})
export class ProductEditPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly productService = inject(ProductService);

  productVm$ = this.productService.currentProduct$.pipe(
    map((product) => deepClone(product))
  );

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.loadProduct(+id!);
  }

  async save(product: Product) {
    await this.productService.saveProduct(product);
    this.router.navigate(['/products']);
  }
}
