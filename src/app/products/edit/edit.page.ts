import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { derivedAsync } from 'ngxtension/derived-async';
import { firstValueFrom } from 'rxjs';

import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  standalone: true,
  imports: [FormsModule, ProductFormComponent],
  templateUrl: './edit.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPage {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly productService = inject(ProductService);

  productId = input.required<string>();

  product = derivedAsync(() =>
    this.productService.fetchProduct(+this.productId()),
  );

  async save(product: Product) {
    await firstValueFrom(this.productService.updateProduct(product));
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
