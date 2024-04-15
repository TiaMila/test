import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { AppointmentService } from '../../service/appointment.service';

@Component({
  selector: 'app-create-appointment',
  
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
 
  
  url: string = ''
  newAppointment: Appointment = { title: '', date: '' };
  constructor(private appointmentService: AppointmentService) {
    
  }
 
  createAppointment() {
    this.appointmentService.addAppointment(this.newAppointment).subscribe({
      next: (appointment) => {
        console.log(appointment)
        console.log(appointment.id)
        var id = appointment.id;
       
     this.url = 'http://localhost:4200/button/' + id;
        alert("termin wurde erzeugt")
      }
     
     
    })
     
   
  }
  ngOnInit(): void {

  }

}

function subscribe(arg0: () => void) {
    throw new Error('Function not implemented.');
}
