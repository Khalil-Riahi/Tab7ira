import { Component } from '@angular/core';
import { PrivateService } from '../../private.service';
import { error } from 'console';

@Component({
  selector: 'list-beaches',
  templateUrl: './list-beaches.component.html',
  styleUrl: './list-beaches.component.css'
})
export class ListBeachesComponent {

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

  // getPrivateBeachesById(){
  //   this.pr
  // }

  deletePrivateBeach(id: number){
    this.pr.supprimerPrivate(id).subscribe(
      (data:any)=>{
        
        console.log(data)
        this.getPrivateBeaches()

      },(error:any)=>{
        console.error(error)
      }
    )
    this.getPrivateBeaches()
  }

  // getPrivateBeachInfoById(id:number){
  //   this.pr.getAllPrivateId(id).subscribe(
  //     (data:any)=>{
  //       this.privateBeaches = data;
  //       console.log(this.privateBeaches)
  //     },(error:any)=>{
  //       console.error(error)
  //     }
  //   )
  // }

  


}


// import { Component, OnInit } from '@angular/core';
// import { User } from '../../../shared/User.model';
// import { LoginService } from '../login.service';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-logging',
//   templateUrl: './logging.component.html',
//   styleUrl: './logging.component.css'
// })
// export class LoggingComponent implements OnInit{
//   ngOnInit(): void {
//   }

//   r:String = "";
//   id:number = 0;
//   userObj: User = new User();

//   constructor(private logg:LoginService,private router:Router) { }
//   log(){

//     let msg = "hhhh"
//     localStorage.setItem("msg1" , msg)
//     // console.log("hh");  
    
//     this.logg.checkUser(this.userObj).subscribe(
//       (data:any)=>{

//         this.r = data.userData.role;
//         if(!data.success){
//           alert("non");
//         }
//         else{
//           alert(data.message);
//           this.router.navigate(['/booking']);
//           let msg = "hhhh"
//           // localStorage.setItem("msg1" , msg)
//           localStorage.setItem("userData", "hhhh");
//         }
//       }
//     )
    

// }
// }
