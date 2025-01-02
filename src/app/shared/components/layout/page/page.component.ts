import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class PageComponent {
  title = input.required<string>();
}
