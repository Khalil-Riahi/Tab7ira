import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/User.model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  userObj: User = new User();

  constructor(private logg:LoginService,private router:Router) { }
  log(){
    console.log("hh");  
    
    this.logg.checkUser(this.userObj).subscribe(
      (data:any)=>{
        if(!data.success){
          alert("non");
        }
        else{
          alert(data.message);
          this.router.navigate(['/booking']);
        }
      }
    )
    

}

}
