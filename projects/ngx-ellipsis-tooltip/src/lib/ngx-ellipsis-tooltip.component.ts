import {ChangeDetectionStrategy, Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ngx-ellipsis-tooltip',
  template: `
    <div [matTooltip]="content" ngxEllipsisTooltip>
      <span class="part-ellipsis">{{contentLeft}}</span>
      <span class="part-without-ellipsis">{{contentRight}}</span>
    </div>`,
  styleUrls: ['./ngx-ellipsis-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEllipsisTooltipComponent {
  @Input() content = '';

  contentLeft: string = '';
  contentRight: string = '';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.content;
    if (change.currentValue !== change.previousValue) {
      const newValue = change.currentValue;
      const regex = new RegExp(/[_ ,.\(\d\)]+/, 'g');
      const indexes = [...newValue.matchAll(regex)]
      const lastIndex = indexes[indexes.length - 1].index;
      this.contentLeft = newValue.substring(0, lastIndex - 1);
      this.contentRight = newValue.substring(lastIndex, newValue.length);
    }
  }
}
