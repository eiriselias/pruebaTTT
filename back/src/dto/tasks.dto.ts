import { tasksStatus } from "src/tasks/tasks.entity"

export class createTaskDto {
    title: string
    description: string
}

export class updateTaskDto{
    title?: string
    description?: string
    status?: tasksStatus
    dateFinish?: Date
}