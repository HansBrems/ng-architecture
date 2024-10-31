import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';

import { HeaderLink } from '~/core/models/app-configuration';
import { ConfigurationService } from '~/core/services/configuration.service';

import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslocoPipe, TopBarComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private readonly configurationService = inject(ConfigurationService);

  links = signal<HeaderLink[]>([]);

  async ngOnInit(): Promise<void> {
    const configuration = await this.configurationService.getConfiguration();
    this.links.set(configuration.header.links);
  }
}
