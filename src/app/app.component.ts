import {Component} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = 'this is a long story about ellipsis, angular and material tooltip';
  title = 'ellipsis-tooltip';
  width: number | null = 300;

  changeWidth(event: MatSliderChange) {
    this.width = event.value
  }
}
