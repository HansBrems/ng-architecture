import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslocoPipe } from '@ngneat/transloco';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

import { FormFieldComponent } from '~/shared/components/forms/form-field/form-field.component';
import { InputGroupComponent } from '~/shared/components/forms/input-group/input-group.component';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    TranslocoPipe,
    FormFieldComponent,
    InputGroupComponent,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './product-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  private readonly confirmationService = inject(ConfirmationService);

  form = viewChild<NgForm>('form');
  productVm = computed<Product>(() => ({
    ...this.product(),
  }));

  product = input.required<Product>();
  submitted = output<Product>();
  cancelled = output<void>();

  confirmCancel($event: MouseEvent) {
    if (this.form()!.dirty) {
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

  save(product: Product): void {
    this.submitted.emit(product);
  }
}
