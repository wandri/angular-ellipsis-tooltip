import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[matTooltip][ngxEllipsisTooltip]',
  host: {
    '[style.width]': '"100%"',
    '[style.height]': '"100%"',
    '[style.white-space]': '"nowrap"',
    '[style.overflow]': '"hidden"',
    '[style.text-overflow]': '"ellipsis"',
  }
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
    console.log(this.elementRef.nativeElement)
    this.matTooltip.disabled = this.elementRef.nativeElement.offsetWidth >= this.elementRef.nativeElement.scrollWidth;
  }
}
