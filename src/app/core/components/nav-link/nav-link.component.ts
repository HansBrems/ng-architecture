import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavLink } from '~/core/models/nav-link';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent {
  link = input.required<NavLink>();
}
