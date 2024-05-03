import { Component } from '@angular/core';
import { PublicbeachService } from '../publicbeach.service';
import { Public } from '../../../shared/addPublic.model';
import { error } from 'console';
@Component({
  selector: 'app-listpublic',
  templateUrl: './listpublic.component.html',
  styleUrl: './listpublic.component.css'
})
export class ListpublicComponent {

  publicBeaches: any = []

  constructor(private pr:PublicbeachService){}
  
  ngOnInit(){
    this.getPublicBeaches();
  }

  getPublicBeaches(){
    this.pr.getPublicAllBeaches().subscribe(
      (data:any)=>{
        this.publicBeaches = data;
        this.publicBeaches()
        console.log(this.publicBeaches)
      },(error:any)=>{
        console.error(error)
      }
    )
  }

  putInSession(publicObj){
    // sessionStorage.setItem("id_p_beach" , JSON.stringify(publicObj.id_public_beach));
    // sessionStorage.setItem("beach_p_name",JSON.stringify(publicObj.beach_name))
 // Assuming publicObj is structured as follows:
// publicObj: {
//   id_public_beach: number;
//   beach_name: string;
//   location: string;
//   description: string;
//   city: string;
//   beach_photos: string;
//   id_user: any;
// }

// Storing each property in sessionStorage
sessionStorage.setItem("id_public_beach", JSON.stringify(publicObj.id_public_beach));
sessionStorage.setItem("beach_name", JSON.stringify(publicObj.beach_name));
sessionStorage.setItem("location", JSON.stringify(publicObj.location));
sessionStorage.setItem("description", JSON.stringify(publicObj.description));
sessionStorage.setItem("city", JSON.stringify(publicObj.city));
sessionStorage.setItem("beach_photos", JSON.stringify(publicObj.beach_photos));
sessionStorage.setItem("id_user", JSON.stringify(publicObj.id_user));
   


  }



  deletePublicBeach(id: number){
    this.pr.supprimerPublic(id).subscribe(
      (data:any)=>{
        
        console.log(data)
        this.getPublicBeaches()

      },(error:any)=>{
        console.error(error)
      }

    )
    this.getPublicBeaches()
  }

  // modifierBeach(id:number){
  //   this.pr.modifierBeach(id).subscribe(
  //     (data:any)=>{
        
  //       console.log(data)
  //       this.getPublicBeaches()

  //     },(error:any)=>{
  //       console.error(error)
  //     }

  //   )
    
  // }

  

  

  
}


// import { Component, OnInit } from '@angular/core';
// import { PublicbeachService } from '../publicbeach.service';
// import { error } from 'console';  // This import of 'error' seems misplaced and is not used correctly

// @Component({
//   selector: 'app-listpublic',
//   templateUrl: './listpublic.component.html',
//   styleUrls: ['./listpublic.component.css'] // Corrected from styleUrl to styleUrls and should be an array
// })
// export class ListpublicComponent implements OnInit {

//   publicBeaches: any = [];  // Ensure this is initialized correctly as an array

//   constructor(private pr: PublicbeachService) {}

//   ngOnInit() {
//     this.getPublicBeaches();
//   }

//   getPublicBeaches() {
//     this.pr.getPublicAllBeaches().subscribe({
//       next: (data: any) => {
//         this.publicBeaches = data;
//         console.log(this.publicBeaches);
//       },
//       error: (error: any) => {
//         console.error('Error fetching public beaches:', error);
//       }
//     });
//   }

//   deletePublicBeach(id: number) {
//     this.pr.supprimerPublic(id).subscribe({
//       next: (data: any) => {
//         console.log('Beach deleted:', data);
//         this.getPublicBeaches();  // Reload beaches after deletion
//       },
//       error: (error: any) => {
//         console.error('Error deleting beach:', error);
//       }
//     });
//   }

//   modifyPublicBeach(beach: any) {  // Ensure beach is passed as a parameter or is defined in this component
//     this.pr.modifierBeach(beach).subscribe({
//       next: () => {
//         console.log("Plage modifiée avec succès !");
//         alert("Plage modifiée avec succès !");
//         this.getPublicBeaches();  // Reload beaches after modification
//       },
//       error: (error: any) => {
//         console.error("Erreur lors de la modification de la plage :", error);
//         alert("Erreur lors de la modification de la plage.");
//       }
//     });
//   }

// }
