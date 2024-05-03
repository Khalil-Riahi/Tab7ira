import { Component, Input , OnInit } from '@angular/core'
import { PrivateService } from '../../../private.service';
import { FormsModule } from '@angular/forms';
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
  