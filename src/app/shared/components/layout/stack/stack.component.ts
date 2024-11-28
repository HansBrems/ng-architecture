import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class StackComponent {
  horizontal = input<boolean>(false);
}
