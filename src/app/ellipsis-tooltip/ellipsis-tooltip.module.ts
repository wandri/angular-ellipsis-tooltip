import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {EllipsisTooltipDirective} from './ellipsis-tooltip.directive';
import {EllipsisTooltipComponent} from './ellipsis-tooltip.component';


@NgModule({
  declarations: [
    EllipsisTooltipDirective,
    EllipsisTooltipComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  exports: [EllipsisTooltipComponent]
})
export class EllipsisTooltipModule {
}
