import { Material } from './material';
import { Person } from './person';
import { Ticket } from './ticket';

export interface User extends Person {
    tickets: Ticket[];
    materials: Material[];
}