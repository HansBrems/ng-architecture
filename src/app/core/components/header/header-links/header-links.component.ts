import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';

import { NavLink } from '~/core/models/configuration/nav-link';
import { NavLinkComponent } from '~/shared/components/navigation/nav-link/nav-link.component';

@Component({
  selector: 'app-header-links',
  templateUrl: './header-links.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoPipe, NavLinkComponent],
})
export class HeaderLinksComponent {
  links = input.required<NavLink[]>();
}
