import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ngx-ellipsis-tooltip',
  template: `
    <div [matTooltip]="content" [content]="content" ngxEllipsisTooltip>
      <span class="part-ellipsis">{{contentLeft}}</span>
      <span class="part-without-ellipsis">{{contentRight}}</span>
    </div>`,
  styleUrls: ['./ngx-ellipsis-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEllipsisTooltipComponent implements OnInit, OnChanges {
  @Input() content = '';

  contentLeft: string = '';
  contentRight: string = '';

  ngOnInit(): void {
    this.updateContent(this.content);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.content;
    if (change.currentValue !== change.previousValue) {
      const newValue = change.currentValue;
      this.updateContent(newValue);
    }
  }

  private updateContent(value: any) {
    if (value.length > 0) {
      const indexes = [...value.matchAll(/[_ ,.\{\[\(]+/g)]
      if (indexes.length > 0) {
        const lastIndex = indexes[indexes.length - 1].index;
        this.contentLeft = value.substring(0, lastIndex);
        this.contentRight = value.substring(lastIndex, value.length);
      } else {
        this.contentLeft = '';
        this.contentRight = value;
      }
    } else {
      this.contentLeft = '';
      this.contentRight = value;
    }
  }
}
