import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Public} from '../../shared/addPublic.model';

@Injectable({
  providedIn: 'root'
})
export class PublicbeachService {

  
  url:string = 'http://localhost/Tab7ira/addPublic.php';
  constructor(public http:HttpClient) { }
  addPublicbeach(a:Public){
    return this.http.post(this.url,a);
  }
  supprimerPublic(id:number){
    let Obj:any = {
      id_public_beach:id
    }
    console.log(Obj);
    return this.http.delete("http://localhost/Tab7ira/deletePublic.php",{body:Obj});
  }


  getPublicAllBeaches(){
    return this.http.get("http://localhost/Tab7ira/public.php");
  }

  modifierBeach(p:Public){
    let Obj:any = {
      
        id_public_beach: p.id_public_beach,
        beach_name: p.beach_name,
        location: p.location,
        description: p.description,
        city: p.city,
        beach_photos: p.beach_photos,
        id_user: p.id_user
    
    }

    console.log(Obj)
    return this.http.put("http://localhost/Tab7ira/modifyPublic.php",{body:Obj});
  }



}