import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ConfigurationService } from '~/core/services/configuration.service';
import { NavBarComponent } from '~/shared/components/navigation/nav-bar/nav-bar.component';
import { NavLinkComponent } from '~/shared/components/navigation/nav-link/nav-link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavLinkComponent, NavBarComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly configurationService = inject(ConfigurationService);

  config = toSignal(this.configurationService.getConfiguration(), {
    initialValue: null,
  });

  links = computed(() => this.config()?.header.links ?? []);
}
