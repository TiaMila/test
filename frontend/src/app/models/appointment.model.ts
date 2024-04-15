import { Participant } from "./participant.model";

export interface Appointment {
  id?: number,
  title?:string,
  date?: string,
  participants?: Participant[],

 
       
}
