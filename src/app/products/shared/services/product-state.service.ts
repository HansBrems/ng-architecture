import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';

import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService {
  private readonly productService = inject(ProductService);

  private readonly productFilter = new BehaviorSubject<string>('');
  productFilter$ = this.productFilter.asObservable();

  products$ = this.productFilter$.pipe(
    switchMap((filter) =>
      this.productService
        .fetchProducts()
        .pipe(
          map((products) =>
            filter
              ? products.filter((product) => product.name.includes(filter))
              : products,
          ),
        ),
    ),
  );

  setProductFilter(filter: string) {
    this.productFilter.next(filter);
  }
}
