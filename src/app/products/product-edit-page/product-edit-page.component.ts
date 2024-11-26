import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  standalone: true,
  imports: [FormsModule, ProductFormComponent],
  templateUrl: './product-edit-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductEditPageComponent {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly productService = inject(ProductService);

  productId = input.required<string>();

  product = toSignal(
    toObservable(this.productId).pipe(
      switchMap((productId) => this.productService.fetchProduct(+productId)),
    ),
  );

  async save(product: Product) {
    await this.productService.updateProduct(product);
    await this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
