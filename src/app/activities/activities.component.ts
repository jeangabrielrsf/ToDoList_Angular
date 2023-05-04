import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  template: `
    <div
      class="activities"
      *ngIf="activitiesList.length > 0; then thenBlock; else elseBlock"
    ></div>
    <ng-template #thenBlock>
      <div class="list">
        <ul>
          <li *ngFor="let item of activitiesList">
            <input type="checkbox" value="{{ item.isDone }}" />
            {{ item.name }}
          </li>
        </ul>
      </div>
    </ng-template>
    <ng-template #elseBlock>
      <div class="listEmpty">
        <img src="../../assets/bg-task 1.svg" alt="texto bonitinho" />
      </div>
    </ng-template>
  `,
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent {
  public activitiesList: Array<{ name: string; isDone: boolean }> = [];
}
