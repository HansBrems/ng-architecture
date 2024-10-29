import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';

import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';
import { ProductTableComponent } from './products-table/products-table.component';

@Component({
  standalone: true,
  imports: [RouterLink, ButtonModule, TranslocoPipe, ProductTableComponent],
  templateUrl: './products-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly productService = inject(ProductService);

  products = signal<Product[]>([]);

  async ngOnInit() {
    const products = await this.productService.fetchProducts();
    this.products.set(products);
  }

  navigateToEditPage(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }
}
