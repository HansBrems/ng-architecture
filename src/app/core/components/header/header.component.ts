import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';

import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslocoPipe, TopBarComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links = [
    {
      label: 'Products',
      to: '/products',
    },
    {
      label: 'Orders',
      to: '/orders',
    },
  ];
}
