import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable, debounceTime, map, startWith, tap } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';


@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit   {
searchHotel!:FormGroup;
parentForm!:FormGroup;
options: string[] = ['Pune', 'Mumbai', 'Nashik'];
filteredOptions: Observable<string[]> | undefined;
constructor(private fb:FormBuilder,private formContainer:FormGroupDirective, private http:HttpService){

}
createForm(){
  this.searchHotel=this.fb.group({
    "city":[''],
    "checkInDate":[''],
    "checkoutDate":[''],
    "adult":['1'],
    "children":['1']
  })
}
  ngOnInit(): void {
   this.createForm();
   this.parentForm=this.formContainer.form;
   if(this.parentForm){
    this.parentForm.addControl("searchHotel",this.searchHotel)
   }
this.filteredOptions=this.searchHotel.controls["city"].valueChanges.pipe(
  debounceTime(1000),
  tap(el=>console.log(el,"response")),
 
    startWith(''),
    map(value => this._filter(value || '')),
);
  } 

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  saveForm(){
    console.log(this.searchHotel.value)
    console.log(this.parentForm.value)

  }
  adultsChange(type:string){
    if(type=="Increment"){
      this.searchHotel.controls['adult'].setValue( this.searchHotel.controls['adult'].value + 1)
  }
  else {
    this.searchHotel.controls['adult'].setValue( this.searchHotel.controls['adult'].value - 1)
  }
}
childrenChange(type:string){
    if(type=="Increment"){
      this.searchHotel.controls['children'].setValue( this.searchHotel.controls['children'].value + 1)
  }
  else {
    this.searchHotel.controls['children'].setValue( this.searchHotel.controls['children'].value -1)
  }
}

}
