import { Component, OnInit, inject } from '@angular/core';
import { ProductTableComponent } from './products-table/products-table.component';
import { ProductService } from '../_data/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe, RouterLink, ProductTableComponent],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly productService = inject(ProductService);

  products$ = this.productService.products$;

  async ngOnInit(): Promise<void> {}

  navigateToEditPage(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }
}
