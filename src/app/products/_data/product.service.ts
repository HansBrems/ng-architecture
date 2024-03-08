import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly http = inject(HttpClient);

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products');
  }

  fetchProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`api/products/${id}`);
  }

  saveProduct(product: Product): Observable<void> {
    return this.http.put<void>(`api/products/${product.id}`, product);
  }
}
