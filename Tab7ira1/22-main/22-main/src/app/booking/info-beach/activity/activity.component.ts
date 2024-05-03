import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {

  @Input()
  inf:{
    description: any,
    activity1 ?: any,
    activity2 ?: any,

  }
}
