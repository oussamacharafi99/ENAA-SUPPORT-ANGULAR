import { PanneType } from './enum';
import { Ticket } from './ticket';

export interface Panne {
    id: number;
    date: string;
    description: string;
    type: string
    tickets: Ticket[];
}
7