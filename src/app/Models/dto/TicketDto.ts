import { PanneType, TicketStatus } from "../enum";

export interface TicketDto {
    userName: string;
    description: string;
    dateCreation: string;
    status: TicketStatus;
    technicalName: string;
    technicalDescription: string;
    materialName: string;
    panneType: PanneType;
}