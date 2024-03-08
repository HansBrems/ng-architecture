import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Product } from '../../_data/product';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [NgFor, RouterLink],
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
