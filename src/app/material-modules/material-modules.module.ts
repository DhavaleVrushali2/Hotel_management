import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

// import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

const materialModules=[
  MatStepperModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,

  MatSelectModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatFormFieldModule
 

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
   
  ],
  exports:[
    materialModules
  ]
})
export class MaterialModulesModule { }
