// // import { Component } from '@angular/core';
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


import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/User.model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']  // Correct the property name to 'styleUrls' and use an array
})
export class LoggingComponent implements OnInit {
  r: String = "";
  id: number = 0;
  userObj: User = new User();

  constructor(private logg: LoginService, private router: Router) { }

  ngOnInit(): void {
    // Set a default or initial value in localStorage on component initialization if necessary
    localStorage.setItem("initialMsg", "Initial message set on component load");
  }

  log(): void {
    // This will execute on method call and store 'hhhh' under 'msg1'
    localStorage.setItem("msg1", "hhhh");

    this.logg.checkUser(this.userObj).subscribe({
      next: (data: any) => {
        if (!data.success) {
          alert("Login failed.");
        } else {
          alert(data.message);
          if(data.role == "admin"){
            this.router.navigate(['/listpublic']);
          }
          else if(data.role == "client"){
            this.router.navigate(['/acceu']);
          }else{
            this.router.navigate(['/container']);
          }
          sessionStorage.setItem("id_user",data.userData.id_user)
          // Ensure userData is valid and available before storing
          // if (data.userData && data.userData.role) {
          //   this.r = data.userData.role;
          //   localStorage.setItem("userData", JSON.stringify(data.userData));
          //   localStorage.setItem("userRole", data.userData.role);  // Optionally store role separately
          // }
        }
      },
      error: (error) => {
        console.error("Error during login", error);
        alert("An error occurred during login.");
      }
    });
  }
}
