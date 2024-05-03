import { Component } from '@angular/core';
import { PublicbeachService } from '../publicbeach.service';
import { Public } from '../../../shared/addPublic.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifypublicbeach',
  templateUrl: './modifypublicbeach.component.html',
  styleUrl: './modifypublicbeach.component.css'
})
export class ModifypublicbeachComponent {
  publicObj: Public = new Public();
  
  constructor(private addb: PublicbeachService,private router:Router) { }

  ngOnInit() {
    // Load the beach data from sessionStorage or set defaults
    this.publicObj.id_public_beach = JSON.parse(sessionStorage.getItem('id_public_beach')) || '';
    this.publicObj.beach_name = JSON.parse(sessionStorage.getItem('beach_name')) || '';
    this.publicObj.location = JSON.parse(sessionStorage.getItem('location')) || '';
    this.publicObj.description = JSON.parse(sessionStorage.getItem('description')) || '';
    this.publicObj.city = JSON.parse(sessionStorage.getItem('city')) || '';
    this.publicObj.beach_photos = JSON.parse(sessionStorage.getItem('beach_photos')) || '';
    this.publicObj.id_user = JSON.parse(sessionStorage.getItem('id_user')) || '';
  }
  
  modifierBeach() {
    sessionStorage.setItem("id_public_beach" , JSON.stringify(this.publicObj.id_public_beach))
    console.log(this.publicObj)

    this.addb.modifierBeach(this. publicObj).subscribe(
      (data:any)=>{
        
        console.log(data)
        // this.getPublicBeaches()

      },(error:any)=>{
        console.error(error)
      }

    );
  }

}
