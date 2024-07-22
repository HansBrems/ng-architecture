import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {
  @ContentChild('startTemplate', { static: false })
  startTemplateRef?: TemplateRef<any>;

  @ContentChild('endTemplate', { static: false })
  endTemplateRef?: TemplateRef<any>;
}
