import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div>
      <h2>{{ title }}</h2>
    </div>
  `,
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  public title: string = 'To-Do List';
}
