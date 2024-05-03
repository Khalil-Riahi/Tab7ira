// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-booking1',
//   templateUrl: './booking1.component.html',
//   styleUrl: './booking1.component.css'
// })
// export class Booking1Component {

// }


import { Component } from '@angular/core';
import { Reserv } from '../../../shared/reserv.model';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking1',
  templateUrl: './booking1.component.html',
  styleUrl: './booking1.component.css'
})
export class Booking1Component {
  ngOnInit(): void {
  }
  publicObj: Reserv = new Reserv();
  constructor(private addd: BookingService,private router:Router) { }
  add(){
   this.addd.addreservation(this.publicObj).subscribe(
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