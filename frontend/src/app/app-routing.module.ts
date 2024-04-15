import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppointmentComponent } from './component/create-appointment/create-appointment.component';
import { AppointmentListComponent } from './component/appointment-list/appointment-list.component';
import { CustomButtonComponent } from './component/custom-button/custom-button.component';


const routes: Routes = [
  {
    path: '',
    component: CreateAppointmentComponent
  },
    {
      path: 'AppointmentList',
      component: AppointmentListComponent
  },
  {
    path: 'button/:id',
    component: CustomButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
