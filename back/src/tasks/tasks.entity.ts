export enum tasksStatus{
    PENDING = "PENDING",
    IN_PROGRESS = "IN PROGRESS",
    COMPLETE = "COMPLETE"
}

export class Tasks {
    id: string
    title: string
    description: string
    status: tasksStatus
    dateFinish: Date
}