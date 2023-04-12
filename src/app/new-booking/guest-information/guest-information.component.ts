import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-guest-information',
  templateUrl: './guest-information.component.html',
  styleUrls: ['./guest-information.component.css']
})
export class GuestInformationComponent implements OnInit {
  guestInfoInform!:FormGroup;
  guestForm!:FormGroup
  guestDetails!:FormGroup
  constructor(private fb:FormBuilder, private FormContainer:FormGroupDirective){
  }
  ngOnInit():void{
    this.guestDetails=this.fb.group({
     "totalGuest":[''],
     "guestsArr":this.fb.array([])
    })
    this.addGuest()

  }

    // this. guestForm=this.FormContainer.form;
    // if(this.guestForm){
    //  this.guestForm.addControl("personalInfo",this.guestForm)
    // }
  

  guest(){
    return this.fb.group({
      "customerName":"",
      "age":"",
      "gender":""
    })
  }
  get guestsArr(){
    return this.guestDetails.get("guestsArr") as FormArray 
  }
  addGuest(){
    this.guestsArr.push(this.guest())
  }
  saveForm(){
    console.log(this.guestDetails.value)

    }
    removeGuest(i:number){
      this.guestsArr.removeAt(i)

    }
   
}
