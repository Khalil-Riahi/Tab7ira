import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-beach-c',
  templateUrl: './beach-c.component.html',
  styleUrl: './beach-c.component.css'
})
export class BeachCComponent {
  @Input()
  beach :{
    image: any,
    title: any,
    description: any,
    butt: any
  }
}
