import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './nav-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  @ContentChild('startTemplate', { static: false })
  startTemplateRef?: TemplateRef<any>;

  @ContentChild('endTemplate', { static: false })
  endTemplateRef?: TemplateRef<any>;
}
