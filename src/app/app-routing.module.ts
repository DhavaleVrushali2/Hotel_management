import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  // {path:'home',component:HomeComponent},
  { path: 'new-booking', loadChildren: () => import('./new-booking/new-booking.module').then(m => m.NewBookingModule) },
  // {path:'',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
