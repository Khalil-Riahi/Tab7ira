import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrl: './beach.component.css'
})
export class BeachComponent {
  @Input()
  beach :{
    image: any,
    title: any,
    description: any,
    butt: any
  }
}
