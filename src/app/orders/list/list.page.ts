import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPage {}
