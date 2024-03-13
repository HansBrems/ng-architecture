import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { Store } from '@ngxs/store';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Observable } from 'rxjs';

import { AppState } from './core/state-ngxs/app.state';
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
    ContainerComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly store = inject(Store);

  apiCalls$: Observable<number> = this.store.select(AppState.apiCalls);
  isLoading$ = this.store.select(AppState.isLoading);
}
