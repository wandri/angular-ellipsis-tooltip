import {NgModule} from '@angular/core';
import {NgxEllipsisTooltipDirective} from './ngx-ellipsis-tooltip.directive';
import {CommonModule} from '@angular/common';
import {NgxEllipsisTooltipComponent} from './ngx-ellipsis-tooltip.component';
import {MatTooltipModule} from "@angular/material/tooltip";


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
