import { Injectable } from '@angular/core';
import { DummyProducts, Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>(DummyProducts);
  products$ = this.productsSubject.asObservable();

  private currentProductSubject = new BehaviorSubject<Product | null>(null);
  currentProduct$ = this.currentProductSubject.asObservable();

  async loadProduct(id: number): Promise<void> {
    this.currentProductSubject.next(null);
    await this.stall();
    const product = DummyProducts.find((p) => p.id === id) || null;
    this.currentProductSubject.next(product);
  }

  async saveProduct(product: Product): Promise<void> {
    await this.stall();
    this.productsSubject.next([
      ...this.productsSubject.value.filter((p) => p.id !== product.id),
      product,
    ]);
  }

  async stall(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
}
