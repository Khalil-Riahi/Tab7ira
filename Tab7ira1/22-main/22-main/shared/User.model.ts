export class User{
    signInEmail:string;
    signInPassword:string;
    id_user:number;
    role:string;
    constructor(){
        this.signInEmail="";
        this.signInPassword="";
        this.id_user=0;
        this.role="";
    }
}