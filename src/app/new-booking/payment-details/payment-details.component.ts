import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit{
  monthList=["Jan","Feb","Mar","April"];
  year=[2023,2024,2025,2026];
  paymentForm!:FormGroup
  parentForm!:FormGroup
  constructor(private fb:FormBuilder,private formContainer:FormGroupDirective){

  }
  ngOnInit(): void {
    this.paymentForm=this.fb.group({
      "nameOnTheCard":[''],
      "debitCardNumber":[''],
      "expiryMonth":[''],
      "expiryYear":[''],
      "securityCode":['']
    })

  const parentForm=this.formContainer.form;
    if(parentForm){
     parentForm.addControl("paymentDetails",this.paymentForm)
    }
    
  }

  saveForm(){
    console.log(this.parentForm)
    }




}
