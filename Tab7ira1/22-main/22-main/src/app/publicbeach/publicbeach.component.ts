import { Component ,  OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Public } from '../../../shared/addPublic.model';
import { PublicbeachService } from '../publicbeach.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-publicbeach',
  templateUrl: './publicbeach.component.html',
  styleUrl: './publicbeach.component.css'
})
export class PublicbeachComponent {
  ngOnInit(): void {
  }
  publicObj: Public = new Public();
  constructor(private addb: PublicbeachService,private router:Router) { }
  add(){
    this.publicObj.id_user = parseInt(sessionStorage.getItem("id_user"))
   this.addb.addPublicbeach(this.publicObj).subscribe(
    (data:any) => {
      console.log(data);
      if(!data.success){
        alert(data.message);
      }
      else{
        alert(data.message);
      }
    }
  )
}
}