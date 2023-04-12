import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  personalInfoForm!:FormGroup;
  parentForm!:FormGroup
 countryList=[
  {value:"",viewValue:"Select"},
  {value:"US", viewValue:'United States'},
  {value:"Ind",viewValue:"India"},
  {value:"UK",viewValue:"United Kingdom"}
 ]
 constructor(private fb:FormBuilder, private FormContainer:FormGroupDirective){
}
ngOnInit():void{
  this.personalInfoForm=this.fb.group({
    "customerName":[''],
    "countryName":[''],
    "mobNo":[''],
    "dob":[''],
    "age":[''],
    "gender":['']
  })
  this. parentForm=this.FormContainer.form;
  if(this.parentForm){
   this.parentForm.addControl("personalInfo",this.personalInfoForm)
  }
}
saveForm(){
console.log(this.parentForm.value)
console.log(this.personalInfoForm.value)
}
}
