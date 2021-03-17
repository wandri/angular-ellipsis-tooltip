import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-ellipsis-tooltip',
  template: '<div [content]="content" [matTooltip]="content" ngxEllipsisTooltip>{{content}}</div>',
  styleUrls: ['./ngx-ellipsis-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEllipsisTooltipComponent {
  @Input() content = '';

  constructor() {
  }
}
