import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe } from '@ngneat/transloco';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

import { FormFieldComponent } from '~/shared/components/forms/form-field/form-field.component';
import { InputGroupComponent } from '~/shared/components/forms/input-group/input-group.component';
import { StackComponent } from '~/shared/components/layout/stack/stack.component';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  private readonly confirmationService = inject(ConfirmationService);
  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    id: new FormControl<number>(0),
    name: new FormControl<string>(''),
    price: new FormControl<number>(0),
  });

  product = input.required<Product>();
  submitted = output<Product>();
  cancelled = output<void>();

  constructor() {
    effect(() => this.form.setValue(this.product()));
  }

  confirmCancel($event: MouseEvent) {
    if (this.form!.dirty) {
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

  save(): void {
    const raw = this.form.getRawValue();
    this.submitted.emit({
      id: raw.id || 0,
      name: raw.name || '',
      price: raw.price || 0,
    });
  }
}
