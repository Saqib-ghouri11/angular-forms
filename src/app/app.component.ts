import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder){}
  title = 'reactive-forms';
//here we will be using form builder service instead of formGroup in order to have efficient code.
reactiveFormModel= this.fb.group(
{
  username:['SaqibAli08'],
  password:[''],
  confirmPassword:[''],
  address:this.fb.group({
    city:[''],
    state:[''],
    postalCode:[''],
  })
}
);
  // reactiveFormModel = new FormGroup({
  //   username:new FormControl('SaqibAli08'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl(''),
  //   }),
  // });

  loadData(){
    //here setValues is restricted to set all field. 
    //we can use patchValues if we want to set only few fields
    this.reactiveFormModel.setValue({
      username:"SaqibAli08",
      password:"123456",
      confirmPassword:"123456",
      address:{
        city:"city",
        state:"state",
        postalCode:"123456"
      }
    });
  }

}
