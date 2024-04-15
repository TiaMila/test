import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { AppointmentService } from '../../service/appointment.service';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
 
  constructor(private appointmentService: AppointmentService) {
   
  }

  ngOnInit(): void {
  }
  updateAppointment() {
    console.log(window.location.href)
    const url = window.location.href;
    const parts = url.split("/"); // Teilt die URL an jedem "/"
    const id = parseInt(parts[parts.length - 1]); // Greift auf den letzten Teil der aufgeteilten URL zu

    console.log(id); // Gibt die ID aus (in diesem Fall 1)
    
    var appointment = {
       participants: [
        {
          firstName: 'test',
          lastName: 'test',
          department: 'test',
          time: "2024-04-13T12:23:00"
        },
        {
          firstName: 'te2st',
          lastName: 'te2st',
          department: 't2est',
          time: "2024-04-13T12:23:00"
        }
      ]
    };
    console.log(appointment);
    this.appointmentService.updateAppointment(id, appointment).subscribe({
      next: (appointment) => {
        console.log(appointment)
        console.log(window.location.href);
      }
    })
    

  }
}
