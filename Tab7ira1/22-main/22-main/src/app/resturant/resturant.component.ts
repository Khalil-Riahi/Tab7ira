import { Component, OnInit } from '@angular/core';
import { Private } from '../../../shared/Private.model';
import { PrivateService } from '../private.service';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrl: './resturant.component.css'
})
export class ResturantComponent implements OnInit {
  privateObj: Private = new Private()

  constructor(public pri:PrivateService){}

  ngOnInit(): void {
    this.privateObj.id_user = parseInt(sessionStorage.getItem("id_user"))
  }

  saveInfo(){
    this.pri.addPrivate(this.privateObj).subscribe(
      (data:any)=>{
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
