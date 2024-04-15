import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { AppointmentService } from '../../service/appointment.service';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointment: Appointment[] = [];
  constructor(private appointmentService: AppointmentService) {
    appointmentService.getAllAppointments().subscribe({
      next: (appointment) => {
        this.appointment = appointment;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
 


  ngOnInit(): void {

  }
}
