import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatTooltipModule} from "@angular/material/tooltip";
import {CommonModule} from "@angular/common";
import {NgxEllipsisTooltipDirective} from "./ngx-ellipsis-tooltip.directive";

@Component({
  selector: 'ngx-ellipsis-tooltip',
  template: `
    <div [matTooltip]="text" [content]="text" ngxEllipsisTooltip>
      <span class="part-ellipsis">{{contentLeft}}</span>
      <span class="part-without-ellipsis">{{contentRight}}</span>
    </div>`,
  styleUrls: ['./ngx-ellipsis-tooltip.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTooltipModule, NgxEllipsisTooltipDirective],
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
    const change = changes.text;
    if (change && change.currentValue !== change.previousValue) {
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
    this.contentLeft = value;
    this.contentRight = "";
  }
}
