import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { NoContentComponent } from '../../misc/no-content/no-content.component';

@Component({
  standalone: true,
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NoContentComponent],
})
export class StackComponent {
  horizontal = input<boolean>(false);
}
