import { Role } from "./enum";

export interface Person {
    id: number;
    username: string;
    email: string;
    password: string;
    roles: Role[];
}
