import { Component } from '@angular/core';
import { Private } from '../../../../shared/Private.model';
import { PrivateService } from '../../private.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beaches-c',
  templateUrl: './beaches-c.component.html',
  styleUrl: './beaches-c.component.css'
})
export class BeachesCComponent {
 

    privateBeaches: any = []
  
    constructor(private pr:PrivateService){}
    
    ngOnInit(){
      this.getPrivateBeaches();
    }
  
    getPrivateBeaches(){
      this.pr.getPrivateAllBeaches().subscribe(
        (data:any)=>{
          this.privateBeaches = data;
          console.log(this.privateBeaches)
        },(error:any)=>{
          console.error(error)
        }
      )
    }
}
