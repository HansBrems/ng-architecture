import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../_data/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  @Input() product: Product | null = null;
  @Output() submitted = new EventEmitter<Product>();
  @Output() cancelled = new EventEmitter<void>();
}
