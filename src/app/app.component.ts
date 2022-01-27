import { Component } from '@angular/core';
import { User } from './classes/user';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private httpService:HttpService){}

  options=['angular','react','vue']
  title = 'angular-forms';
  isSelectInvalid=true;
  responseError=''

  userData:User = new User('','abc@gmail.com',3101212123,{houseNo:'g/123',city:'hyd',state:'Pak',postalCode:112233,},'default','morning',true);
  validateSelect(value:any){
    if(value=='default'){
      this.isSelectInvalid=true;
    }else{
      this.isSelectInvalid=false;
    }
  }

  onSubmit(userFrm:any){
    console.log(userFrm);

    // this.httpService.postService('http://localhost:8000/post-here',this.userData).subscribe(
    //   data=> console.log('success',data),
    //   error=> this.responseError=error.statusText,
    // );

  }

}
