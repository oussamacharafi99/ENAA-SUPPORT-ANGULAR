import { Material } from "./material";
import { Panne } from "./panne";

export interface Historic {
    material: Material;
    panne: Panne;
    startDate: string;
    endDate?: string;  
    description: string;
}
