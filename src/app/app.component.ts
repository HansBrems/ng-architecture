import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { MessagesModule } from 'primeng/messages';
import { map } from 'rxjs';

import { HeaderComponent } from './core/components/header/header.component';
import { ContainerComponent } from './shared/components/layout/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslocoModule,
    MessagesModule,
    HeaderComponent,
    ContainerComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly translationService = inject(TranslocoService);

  messages = toSignal(
    this.translationService
      .selectTranslate<string>('disclaimer')
      .pipe(map((disclaimer) => [{ severity: 'warn', summary: disclaimer }])),
    { initialValue: [] },
  );
}
