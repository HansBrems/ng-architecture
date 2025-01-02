import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { derivedAsync } from 'ngxtension/derived-async';

import { PageComponent } from '~/shared/components/layout/page/page.component';

import { ProductFormComponent } from '../shared/components/product-form/product-form.component';
import { Product } from '../shared/models/product';
import { ProductNavigationService } from '../shared/services/product-navigation.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  templateUrl: './edit.page.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoPipe, PageComponent, ProductFormComponent],
})
export class EditPage {
  readonly navigationService = inject(ProductNavigationService);
  readonly productService = inject(ProductService);

  productId = input.required<string>();

  product = derivedAsync(() =>
    this.productService.fetchProduct(+this.productId()),
  );

  async save(product: Product) {
    await this.productService.updateProductAsync(product);
    this.navigationService.navigateToListPage();
  }
}
