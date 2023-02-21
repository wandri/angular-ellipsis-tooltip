import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

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
export class NgxEllipsisTooltipComponent implements OnChanges{
  @Input() content = '';

  contentLeft: string = '';
  contentRight: string = '';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.content;
    if (change.currentValue !== change.previousValue) {
      const newValue = change.currentValue;
      if(newValue.length>0){
        const indexes = [...newValue.matchAll(/[_ ,.\(\)]+/g)]
        if(indexes.length>0){
          const lastIndex = indexes[indexes.length - 1].index;
          this.contentLeft = newValue.substring(0, lastIndex);
          this.contentRight = newValue.substring(lastIndex, newValue.length);
        }else{
          this.contentLeft='';
          this.contentRight = newValue;
        }
      }else{
        this.contentLeft='';
        this.contentRight = newValue;
      }
    }
  }
}
