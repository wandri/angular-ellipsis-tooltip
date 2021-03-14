import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-ellipsis-tooltip',
  templateUrl: './ellipsis-tooltip.component.html',
  styleUrls: ['./ellipsis-tooltip.component.scss']
})
export class EllipsisTooltipComponent {
  @Input() content = '';
  domElement: any;

  constructor(private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement;
  }
}
