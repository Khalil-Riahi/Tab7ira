import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {
  request = [
    {desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad' , im:'../../../assets/background.jpg'   },
    {desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad' , im:'../../../assets/background.jpg'   },
    {desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad' , im:'../../../assets/background.jpg'  }
  ]

  @Input()
  request1 : {
    im: any,
    description: any,
  }
}
