import { tasksStatus } from "src/tasks/tasks.entity";
export declare class createTaskDto {
    title: string;
    description: string;
}
export declare class updateTaskDto {
    title?: string;
    description?: string;
    status?: tasksStatus;
    dateFinish?: Date;
}
