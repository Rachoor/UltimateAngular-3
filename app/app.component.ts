import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input
          type="text"
          [value]="title"
          (input)="handleChange($event.target.value)"
      >
      <template [ngIf]="title.length > 3">
          <div>
          Searching for... {{ title }}
          </div>
      </template>

      <div *ngIf="title.length > 3">
          Searching for... {{ title }}
      </div>
    </div>
  `
})
export class AppComponent {
  title: string = "";
  handleChange(value: string) {
    this.title = value;
  }
}
