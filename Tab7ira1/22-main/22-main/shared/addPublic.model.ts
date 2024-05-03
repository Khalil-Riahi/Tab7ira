export class Public{
    id_public_beach: number;
    beach_name:string;
    location  :String;
    description :String;
     city : string;
     beach_photos :string;
     id_user: any;
    constructor(){
        this.id_public_beach = 0;
        this.beach_name="";
        this.location="";
        this.description="";
        this.city="";
        this.beach_photos="";
        this.id_user=parseInt(sessionStorage.getItem(this.id_user))
    }
}