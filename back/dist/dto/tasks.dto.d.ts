import { tasksStatus } from "src/tasks/tasks.entity";
export declare class CreateTaskDto {
    title: string;
    description: string;
}
export declare class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: tasksStatus;
    dateFinish?: Date;
}
