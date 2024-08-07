import { User } from './user';
import { Ticket } from './ticket';
import { MaterialEtat } from './enum';

export interface Material {
    id: number;
    name: string;
    description: string;
    etat: MaterialEtat;
    insert_date: String;
    user: User;
    tickets: Ticket[];
}
