import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordValidator } from './custom/password-validator';
import {forbiddenNameValidator} from './custom/user-validator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder){}
  title = 'reactive-forms';
  //defining getters and setters of the form controls

//here we will be using form builder service instead of formGroup in order to have efficient code.
reactiveFormModel= this.fb.group(
{
  //applying validation using second element of the formControl array
  username:['SaqibAli08',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/admin/)]],
  password:['',[Validators.required,Validators.minLength(8)]],
  confirmPassword:['',[Validators.required,Validators.minLength(8)]],
  address:this.fb.group({
    city:['',Validators.required],
    state:['',Validators.required],
    postalCode:['',Validators.required],
  })
},{validator: passwordValidator}
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
  get getUsername(){return this.reactiveFormModel.get('username');}
  get getPassword(){return this.reactiveFormModel.get('password');}
  get getConfirmPassword(){return this.reactiveFormModel.get('confirmPassword');}
  get getAddress(){return this.reactiveFormModel.get('address');}
  

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
