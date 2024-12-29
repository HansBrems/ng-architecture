import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { TableModule } from 'primeng/table';

import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [TableModule],
  templateUrl: './products-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsTableComponent {
  products = input<Product[]>([]);
  rowClicked = output<number>();
}
