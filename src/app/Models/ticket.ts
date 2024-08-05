import { User } from './user';
import { Technician } from './technician';
import { Panne } from './panne';
import { Material } from './material';
import { TicketStatus } from './enum';

export interface Ticket {
    id: number;
    description: string;
    dateCreation: Date;
    status: TicketStatus;
    technicalDescription: string;
    panne: Panne;
    user: User;
    technician: Technician;
    material: Material;
}
