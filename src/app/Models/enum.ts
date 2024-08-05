export enum Role {
    ROLE_USER,
    ROLE_ADMIN,
    ROLE_TECHNICIAN
}

export enum TicketStatus {
    FAILURE,
    PROCESSING,
    FIXED
}

export enum PanneType {
    HARDWARE_FAILURE,
    SOFTWARE_ISSUE,
    NETWORK_PROBLEM,
    POWER_OUTAGE,
    OVERHEATING,
    SECURITY_BREACH,
    DATA_CORRUPTION,
    USER_ERROR,
    CONFIGURATION_ERROR,
    ENVIRONMENTAL_ISSUE
}

export enum MaterialEtat {
    NEW,
    OUT_SERVICE,
    REPAIR
}