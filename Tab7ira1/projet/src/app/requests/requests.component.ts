import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  requests = [
    {
      im :'../../assets/ph.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad'
    },
    {
      im :'../../assets/ph.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad'
    },
    {
      im :'../../assets/ph.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad'
    },
    {
      im :'../../assets/ph.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad'
    }
  ]

}
