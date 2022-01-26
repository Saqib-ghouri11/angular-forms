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

  userData:User = new User('','abc@gmail.com',3101212123,{houseNo:'g/123',city:'hyd',state:'Pak',postalCode:112233,},'angular','morning',true);


}
