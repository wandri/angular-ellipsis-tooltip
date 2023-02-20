import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  text = 'this is a long story';
  title = 'ellipsis-tooltip';
  width: number | null = 200;
  displayEllipsis = true;
  autoText: number = 0;

  ngAfterViewInit() {
    const example = 'this is a long story about ellipsis, angular and material tooltip';
    let index = 'this is a long story'.length - 1;
    let direction = 1;
    this.autoText = setInterval(() => {
      if (direction == 1 && index != example.length - 1) {
        index++;
        this.text += example[index]
      } else if (direction == 1 && index == example.length - 1) {
        direction = -1;
        index--;
        this.text = this.text.slice(0, -1);
      } else if (direction == -1 && index != 0) {
        index--;
        this.text = this.text.slice(0, -1);
      } else {
        direction = 1;
        index++;
        this.text += example[index]
      }
    }, 100 * (1 + Math.random()))
  }

  changeWidth(event: number) {
    this.width = event;
    this.displayEllipsis = true;
  }

  removeEllipsis() {
    this.displayEllipsis = false;
  }

  clearAutoText() {
    if (this.autoText) {
      clearInterval(this.autoText);
    }
  }
}
