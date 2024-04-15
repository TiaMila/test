import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseApiUrl: string = 'https://localhost:44348';
  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseApiUrl + '/api/appointment');
  }
  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseApiUrl + '/api/appointment', appointment)
     
  }

  updateAppointment(id:number, appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(this.baseApiUrl + '/api/appointment/' + id, appointment)

  }
}
