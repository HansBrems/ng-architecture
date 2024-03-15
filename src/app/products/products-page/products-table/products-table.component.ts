import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';

import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule, RouterLink, TableModule],
  templateUrl: './products-table.component.html',
})
export class ProductTableComponent {
  @Input() products: Product[] | null = [];
  @Output() linkClicked = new EventEmitter<number>();

  onLinkClicked($event: MouseEvent, productId: number) {
    this.linkClicked.emit(productId);
    // Prevent default event behavior
    $event.preventDefault();
  }
}
