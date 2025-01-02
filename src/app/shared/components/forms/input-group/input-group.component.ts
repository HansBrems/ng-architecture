import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NoContentComponent } from '../../misc/no-content/no-content.component';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  standalone: true,
  imports: [NoContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputGroupComponent {}
