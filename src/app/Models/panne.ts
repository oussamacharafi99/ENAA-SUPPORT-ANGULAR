import { PanneType } from './enum';
import { Ticket } from './ticket';

export interface Panne {
    id: number;
    date: Date;
    description: string;
    type: PanneType;
    tickets: Ticket[];
}
