import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MenubarModule } from 'primeng/menubar';

import { ConfigurationService } from '~/core/services/configuration.service';
import { NavBarComponent } from '~/shared/components/navigation/nav-bar/nav-bar.component';

import { HeaderLinksComponent } from './header-links/header-links.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderLinksComponent, NavBarComponent, MenubarModule],
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
