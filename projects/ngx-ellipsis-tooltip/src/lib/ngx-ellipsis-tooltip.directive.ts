import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[matTooltip][ngxEllipsisTooltip]'
})
export class NgxEllipsisTooltipDirective implements AfterViewInit, OnChanges {

  @Input() content = '';

  constructor(private matTooltip: MatTooltip,
              private elementRef: ElementRef<HTMLElement>) {
  }

  public ngAfterViewInit(): void {
    this.setToolTip();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.content;
    if (change.currentValue !== change.previousValue) {
      this.setToolTip();
    }
  }

  @HostListener('window:resize', ['$event.target'])
  setToolTip(): void {
    this.matTooltip.disabled = this.elementRef.nativeElement.offsetWidth >= this.elementRef.nativeElement.scrollWidth;
  }
}
