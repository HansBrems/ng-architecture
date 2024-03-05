import { Injectable, inject } from '@angular/core';
import { ProductService } from '../products/_data/product.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/_data/product';

@Injectable({ providedIn: 'root' })
export class ProductStateService {
  readonly productService = inject(ProductService);

  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  private currentProductSubject = new BehaviorSubject<Product | null>(null);
  currentProduct$ = this.currentProductSubject.asObservable();

  initializeState(products: Product[]) {
    this.productsSubject.next(products);
  }

  loadProducts() {
    this.productService.fetchProducts().subscribe((products) => {
      this.productsSubject.next(products);
    });
  }

  loadProduct(id: number) {
    this.productService.fetchProduct(id).subscribe((product) => {
      this.currentProductSubject.next(product);
    });
  }

  saveProduct(product: Product) {
    this.productService.saveProduct(product).subscribe(() => {});
  }
}
