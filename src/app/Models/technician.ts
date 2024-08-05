import { Person } from './person';
import { Ticket } from './ticket';

export interface Technician extends Person {
    tickets: Ticket[];
}