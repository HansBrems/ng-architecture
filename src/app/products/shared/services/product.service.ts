import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom, tap } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly http = inject(HttpClient);

  newId = 4;

  fetchProducts(): Promise<Product[]> {
    return firstValueFrom(this.http.get<Product[]>('api/products'));
  }

  fetchProduct(id: number): Promise<Product> {
    return firstValueFrom(this.http.get<Product>(`api/products/${id}`));
  }

  insertProduct(product: Product): Promise<void> {
    return firstValueFrom(
      this.http
        .post<void>('api/products', product)
        .pipe(tap(() => (this.newId = this.newId + 1))),
    );
  }

  updateProduct(product: Product): Promise<void> {
    return firstValueFrom(
      this.http.put<void>(`api/products/${product.id}`, product),
    );
  }
}
