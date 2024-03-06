import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackComponent {}
