import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';
import {MatTooltip} from '@angular/material/tooltip';

@Directive({
  selector: '[matTooltip][appEllipsisTooltip]'
})
export class EllipsisTooltipDirective implements AfterViewInit {

  constructor(private matTooltip: MatTooltip,
              private elementRef: ElementRef<HTMLElement>) {
  }

  public ngAfterViewInit(): void {
    this.setToolTip();
  }

  @HostListener('window:resize', ['$event.target'])
  setToolTip(): void {
    this.matTooltip.disabled = this.elementRef.nativeElement.offsetWidth >= this.elementRef.nativeElement.scrollWidth;
  }
}
