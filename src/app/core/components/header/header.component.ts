import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
