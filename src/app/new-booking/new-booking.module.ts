import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookingRoutingModule } from './new-booking-routing.module';
import { NewBookingComponent } from './new-booking.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { ChooseHotelComponent } from './choose-hotel/choose-hotel.component';
import { ChooseRoomComponent } from './choose-room/choose-room.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { GuestInformationComponent } from './guest-information/guest-information.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { FinishBookingComponent } from './finish-booking/finish-booking.component';


@NgModule({
  declarations: [
    NewBookingComponent,
    SearchHotelComponent,
    ChooseHotelComponent,
    ChooseRoomComponent,
    PersonalInformationComponent,
    GuestInformationComponent,
    PaymentDetailsComponent,
    FinishBookingComponent
  ],
  imports: [
    CommonModule,
    NewBookingRoutingModule,
    MaterialModulesModule,
    ReactiveFormsModule,
  ]
})
export class NewBookingModule { }
