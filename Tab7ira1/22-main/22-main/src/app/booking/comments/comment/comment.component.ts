import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  comment =  [
    {desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad'},
    {desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad'},
    {desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, exercitationem dolorum sequi consectetur eius consequatur, dolore ad'}
  ]
}
