import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';

import { ContainerComponent } from './shared/components/layout/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ContainerComponent, TranslocoPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {}
