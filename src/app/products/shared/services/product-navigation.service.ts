import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductNavigationService {
  private readonly router = inject(Router);

  navigateToListPage(): Promise<boolean> {
    return this.router.navigate(['products']);
  }

  navigateToAddPage(): Promise<boolean> {
    return this.router.navigate(['products', 'add']);
  }

  navigateToEditPage(productId: number): Promise<boolean> {
    return this.router.navigate(['products', productId, 'edit']);
  }
}
