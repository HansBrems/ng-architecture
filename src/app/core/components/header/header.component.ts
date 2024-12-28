import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';

import { NavLink } from '~/core/models/configuration/nav-link';
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
export class HeaderComponent implements OnInit {
  private readonly configurationService = inject(ConfigurationService);

  links = signal<NavLink[]>([]);

  async ngOnInit(): Promise<void> {
    const configuration = await this.configurationService.getConfiguration();
    this.links.set(configuration.header.links);
  }
}
