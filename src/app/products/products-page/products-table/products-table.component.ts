import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';

import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule, RouterLink, TableModule],
  templateUrl: './products-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent {
  products = input<Product[]>([]);
  linkClicked = output<number>();

  onLinkClicked($event: MouseEvent, productId: number) {
    this.linkClicked.emit(productId);
    // Prevent default event behavior
    $event.preventDefault();
  }
}
