import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

import { FormFieldComponent } from '../../../shared/components/forms/form-field/form-field.component';
import { InputGroupComponent } from '../../../shared/components/forms/input-group/input-group.component';
import { StackComponent } from '../../../shared/components/layout/stack/stack.component';
import { Product } from '../../_data/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    StackComponent,
    FormFieldComponent,
    InputGroupComponent,
  ],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  @Input() product: Product | null = null;
  @Output() submitted = new EventEmitter<Product>();
  @Output() cancelled = new EventEmitter<void>();
}
