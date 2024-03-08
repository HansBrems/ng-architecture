import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslocoPipe } from '@ngneat/transloco';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
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
    ConfirmDialogModule,
    InputNumberModule,
    InputTextModule,
    TranslocoPipe,
    StackComponent,
    FormFieldComponent,
    InputGroupComponent,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  private readonly confirmationService = inject(ConfirmationService);

  @Input() product: Product | null = null;
  @Output() submitted = new EventEmitter<Product>();
  @Output() cancelled = new EventEmitter<void>();
  @ViewChild('productForm') productForm: NgForm | null = null;

  confirmCancel($event: MouseEvent) {
    if (this.productForm!.dirty) {
      this.confirmationService.confirm({
        header: 'Confirmation',
        target: $event.target as EventTarget,
        message: 'Are you sure you want to cancel?',
        acceptIcon: 'none',
        rejectIcon: 'none',
        rejectButtonStyleClass: 'p-button-text',
        accept: () => this.cancelled.emit(),
      });
    } else {
      this.cancelled.emit();
    }
  }
}
