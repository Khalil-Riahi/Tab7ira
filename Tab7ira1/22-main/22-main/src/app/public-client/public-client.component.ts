import { Component } from '@angular/core';
import { Public } from '../../../shared/addPublic.model';
import { PublicbeachService } from '../publicbeach.service';

@Component({
  selector: 'app-public-client',
  templateUrl: './public-client.component.html',
  styleUrl: './public-client.component.css'
})
export class PublicClientComponent {

  publicBeaches: any = []

  constructor(private pr:PublicbeachService){}
  
  ngOnInit(){
    this.getPublicBeaches();
  }

  getPublicBeaches(){
    this.pr.getPublicAllBeaches().subscribe(
      (data:any)=>{
        this.publicBeaches = data;
        this.publicBeaches()
        console.log(this.publicBeaches)
      },(error:any)=>{
        console.error(error)
      }
    )
  }
}
