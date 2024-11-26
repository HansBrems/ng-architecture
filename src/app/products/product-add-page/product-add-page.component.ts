import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './product-add-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAddPageComponent {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly productService = inject(ProductService);

  product: Product = {
    id: this.productService.newId,
    name: '',
    price: 0,
  };

  async save(product: Product): Promise<void> {
    await firstValueFrom(this.productService.insertProduct(product));
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
