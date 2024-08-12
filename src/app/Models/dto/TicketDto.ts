import { PanneType, TicketStatus } from "../enum";

export interface TicketDto {
    id: number;
    userName: string;
    description: string;
    dateCreation: string;
    status: TicketStatus;
    technicalName: string;
    technicalDescription: string;
    materialName: string;
    panneType: PanneType;
}