import {
  ChangeDetectionStrategy,
  Component,
  model,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { StackComponent } from '~/shared/components/layout/stack/stack.component';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, StackComponent],
})
export class ProductFilterComponent {
  filterText = model<string>('');
  filterApplied = output<string>();
}
