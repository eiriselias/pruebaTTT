import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from 'src/dto/tasks.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): import("./tasks.entity").Tasks[];
    createTask(newTask: createTaskDto): {
        id: string;
        title: string;
        description: string;
        status: import("./tasks.entity").tasksStatus;
        dateFinish: Date;
    };
    deleteTask(id: string): void;
    updateTask(id: string, updateFiles: updateTaskDto): import("./tasks.entity").Tasks;
}
