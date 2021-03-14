import {Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ellipsis-tooltip',
  templateUrl: './ellipsis-tooltip.component.html',
  styleUrls: ['./ellipsis-tooltip.component.scss']
})
export class EllipsisTooltipComponent implements OnChanges {
  @Input() content = '';
  domElement: any;
  text = '';

  constructor(private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.content;
    if (change.currentValue !== change.previousValue) {
      this.text = change.currentValue;
    }
  }


}
