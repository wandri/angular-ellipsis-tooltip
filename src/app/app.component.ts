import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  text = '';
  title = 'ellipsis-tooltip';
  width: number | null = 200;
  displayEllipsis = true;
  autoText: number = 0;

  ngAfterViewInit() {
    const example = 'This is a long story about ellipsis, angular and material tooltip';
    let firstText = 'This is a long story';
    let index = firstText.length - 1;
    this.text = firstText;
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
    if (event < 60) {
      this.width = 60;
    } else {
      this.width = event;
    }
    this.displayEllipsis = true;
  }

  clearAutoText() {
    if (this.autoText) {
      clearInterval(this.autoText);
    }
  }

}
