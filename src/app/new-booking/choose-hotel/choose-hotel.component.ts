import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-hotel',
  templateUrl: './choose-hotel.component.html',
  styleUrls: ['./choose-hotel.component.css']
})
export class ChooseHotelComponent implements OnInit {
   constructor(){}
   hotelList:any=[];
   ngOnInit(): void {
     this.hotelList
   }
   
}
