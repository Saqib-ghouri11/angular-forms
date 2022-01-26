import { Component } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options=['angular','react','vue']
  title = 'angular-forms';
  isSelectInvalid=false;

  userData:User = new User('','abc@gmail.com',3101212123,{houseNo:'g/123',city:'hyd',state:'Pak',postalCode:112233,},'default','morning',true);
  validateSelect(value:any){
    if(value=='default'){
      this.isSelectInvalid=true;
    }else{
      this.isSelectInvalid=false;
    }
  }

}
