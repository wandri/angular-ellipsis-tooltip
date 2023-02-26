import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ngx-ellipsis-tooltip',
  template: `
    <div [matTooltip]="text" [content]="text" ngxEllipsisTooltip>
      <span class="part-ellipsis">{{contentLeft}}</span>
      <span class="part-without-ellipsis">{{contentRight}}</span>
    </div>`,
  styleUrls: ['./ngx-ellipsis-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEllipsisTooltipComponent implements OnInit, OnChanges {
  @Input() text = '';
  @Input() smartCut = true;

  contentLeft: string = '';
  contentRight: string = '';

  ngOnInit(): void {
    this.updateText(this.text);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.content;
    if (change.currentValue !== change.previousValue) {
      const newValue = change.currentValue;
      this.updateText(newValue);
    }
  }

  private updateText(value: any): void {
    if (value.length > 0 && this.smartCut) {
      const indexes = [...value.matchAll(/[_ ,.\{\[\(]+/g)]
      if (indexes.length > 0) {
        const lastIndex = Math.max(indexes[indexes.length - 1].index, value.length - 6);
        this.contentLeft = value.substring(0, lastIndex);
        this.contentRight = value.substring(lastIndex, value.length);
        return;
      }
    }
    this.contentLeft = '';
    this.contentRight = value;
  }
}
