import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
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
  @Input() content = '';

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
    const children:HTMLCollection = this.elementRef.nativeElement.children;
    this.matTooltip.disabled = children.item(0)!.clientWidth+children.item(1)!.clientWidth >= children.item(0)!.scrollWidth+children.item(1)!.scrollWidth;
  }
}
