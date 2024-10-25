import { AsyncPipe, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  input,
} from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, FormsModule, ProductFormComponent],
  templateUrl: './product-edit-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductEditPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly productService = inject(ProductService);

  product = signal<Product | null>(null);
  productId = input.required<string>();

  async ngOnInit(): Promise<void> {
    const product = await this.productService.fetchProduct(+this.productId());
    this.product.set(product);
  }

  async save(product: Product) {
    await this.productService.updateProduct(product);
    await this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
