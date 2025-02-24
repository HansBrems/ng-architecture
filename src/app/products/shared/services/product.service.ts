import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom, tap } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);

  newId = 4;

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products');
  }

  fetchProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`api/products/${id}`);
  }

  insertProduct(product: Product): Observable<void> {
    return this.http
      .post<void>('api/products', product)
      .pipe(tap(() => (this.newId = this.newId + 1)));
  }

  insertProductAsync(product: Product): Promise<void> {
    return firstValueFrom(this.insertProduct(product));
  }

  updateProduct(product: Product): Observable<void> {
    return this.http.put<void>(`api/products/${product.id}`, product);
  }

  updateProductAsync(product: Product): Promise<void> {
    return firstValueFrom(this.updateProduct(product));
  }
}
