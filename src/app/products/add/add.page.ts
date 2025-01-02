import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';

import { PageComponent } from '~/shared/components/layout/page/page.component';

import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { Product } from '../shared/models/product';
import { ProductNavigationService } from '../shared/services/product-navigation.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  standalone: true,
  imports: [TranslocoPipe, PageComponent, ProductFormComponent],
  templateUrl: './add.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPage {
  readonly navigationService = inject(ProductNavigationService);
  readonly productService = inject(ProductService);

  product: Product = {
    id: this.productService.newId,
    name: '',
    price: 0,
  };

  async save(product: Product): Promise<void> {
    await this.productService.insertProductAsync(product);
    this.navigationService.navigateToListPage();
  }
}
