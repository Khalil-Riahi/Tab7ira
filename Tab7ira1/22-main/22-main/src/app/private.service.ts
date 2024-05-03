import { Injectable } from '@angular/core';
import { Private } from '../../shared/Private.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {
  url: string = "http://localhost/Tab7ira/addPrivate.php"; // Corrected to primitive string type

  constructor(public http: HttpClient) { }

  addPrivate(p: Private) {
    return this.http.post(this.url, p); // No type issues here, URL is a primitive string
  }

  supprimerPrivate(id:number){
    let Obj:any = {
      id_private_beach:id
    }
    console.log(Obj);
    return this.http.delete("http://localhost/Tab7ira/deletePrivate.php",{body:Obj});
  }


  getPrivateAllBeaches(){
    return this.http.get("http://localhost/Tab7ira/private.php");
  }

  // getAllPrivateId(id:number){
  //   let Obj:any = {
  //     id_user:id
  //   }
  //   console.log(Obj);
  //   return this.http.get("http://localhost/Tab7ira/getallBeachesByO.php"+"?id_user="+id)
  //   // return this.http.delete(this.url+"?id="+id);
  // }
}
