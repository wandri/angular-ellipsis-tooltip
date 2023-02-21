import {AfterViewInit, Directive, ElementRef, HostListener, OnChanges, SimpleChanges} from '@angular/core';
import {MatTooltip} from "@angular/material/tooltip";

@Directive({
  selector: '[matTooltip][ngxEllipsisTooltip]',
  host: {
    '[style.width]': '"100%"',
    '[style.height]': '"100%"',
    '[style.white-space]': '"nowrap"',
    '[style.display]': '"flex"'
  }
})
export class NgxEllipsisTooltipDirective implements AfterViewInit, OnChanges {

  constructor(private matTooltip: MatTooltip,
              private elementRef: ElementRef<HTMLElement>) {
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.setToolTip();
    }, 0)
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
