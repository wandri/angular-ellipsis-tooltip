import { NgModule } from '@angular/core';
import { NgxEllipsisTooltipDirective } from './ngx-ellipsis-tooltip.directive';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxEllipsisTooltipComponent } from './ngx-ellipsis-tooltip.component';


@NgModule({
  declarations: [
    NgxEllipsisTooltipDirective,
    NgxEllipsisTooltipComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  exports: [NgxEllipsisTooltipComponent]
})
export class NgxEllipsisTooltipModule {
}
