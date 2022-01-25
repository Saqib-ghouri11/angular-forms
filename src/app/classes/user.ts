export class User {
    constructor(
       public name:string,
       public email:string,
       public phone:number,
       public address:{houseNo:string,city:string,state:string,postalCode:number},
       public interest:string,
       public timePreferences:string,
       public subscribe:boolean,
    ){}
}
