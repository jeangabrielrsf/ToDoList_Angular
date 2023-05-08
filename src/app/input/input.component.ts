import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div>
      <input
        [(ngModel)]="inputActivity"
        (keypress)="enterActivity($event)"
        type="text"
        placeholder="Digite sua nova atividade aqui...."
      />
    </div>
  `,
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Output() public sendActivity = new EventEmitter();

  public inputActivity: string = '';
  public activityData: { name: string; isDone: boolean } = {
    name: '',
    isDone: false,
  };

  public enterActivity(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (this.inputActivity.length < 3) {
        alert('Nome de atividade muito curto!');
        return;
      }
      this.activityData.name = this.inputActivity;
      this.activityData.isDone = false;
      this.sendActivity.emit(this.activityData);
      this.inputActivity = '';
      console.log(this.activityData);
    }
  }
}
