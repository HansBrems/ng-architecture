import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { HeaderComponent } from './core/components/header/header.component';
import { ContainerComponent } from './shared/components/layout/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterOutlet,
    RouterLink,
    TranslocoPipe,
    ProgressSpinnerModule,
    HeaderComponent,
    ContainerComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  //private readonly store = inject(Store);
  // apiCalls$: Observable<number> = this.store.select(AppState.apiCalls);
  // isLoading$ = this.store.select(AppState.isLoading);
}
