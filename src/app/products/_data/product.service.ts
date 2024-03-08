import { Injectable, inject } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  saveProduct(product: Product): Observable<Object> {
    return this.http.put(`api/products/${product.id}`, product);
  }
}
