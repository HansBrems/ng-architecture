import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ContainerComponent } from './shared/components/layout/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ContainerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
