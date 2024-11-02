import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent {
  label = input.required<string>();
  to = input.required<string>();
}
