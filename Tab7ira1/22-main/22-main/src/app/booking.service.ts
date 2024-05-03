// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import {Reserv} from '../../shared/reserv.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

 
  url:string = 'http://localhost/Tab7ira/booking.php';
  addreservation(a:Reserv){
    return this.http.post(this.url,a);
  }
  constructor(public http:HttpClient) { }

}