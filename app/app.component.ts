import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1>{{ title }}</h1>
      <h1 [innerHtml]="title"></h1>
      <div>
        {{ numberOne  +  numberTwo }}
      </div>
      <div>
      {{ isHappy ? ':)' : ':(' }}
    </div>
    <button (click)="handleClick(username.value)">
    Get Value
    </button>
    <input type="text" #username>
    <div> {{ title }} </div>
    </div>
  `
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  constructor() {
    this.title = 'Saran';
  }

  handleClick(value: string) {
    console.log(value);
  }
}
