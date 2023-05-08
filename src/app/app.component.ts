import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public list: Array<{ name: string; isDone: boolean }>;

  public setActivity(event: { name: string; isDone: boolean }) {
    console.log('lista antes de setar');
    console.log(this.list);
    this.list = [...this.list, event];
    console.log('lista depois de setar');
    console.log(this.list);
  }

  constructor() {
    this.list = [];
  }
}
