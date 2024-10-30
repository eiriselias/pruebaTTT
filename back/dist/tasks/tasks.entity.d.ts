export declare enum tasksStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN PROGRESS",
    COMPLETE = "COMPLETE"
}
export declare class Tasks {
    id: string;
    title: string;
    description: string;
    status: tasksStatus;
    dateFinish: Date;
}
