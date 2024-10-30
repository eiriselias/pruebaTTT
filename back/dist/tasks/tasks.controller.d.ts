import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/tasks.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): import("./tasks.entity").Tasks[];
    createTask(newTask: CreateTaskDto): {
        id: string;
        title: string;
        description: string;
        status: import("./tasks.entity").tasksStatus;
        dateFinish: Date;
    };
    deleteTask(id: string): void;
    updateTask(id: string, updateFiles: UpdateTaskDto): import("./tasks.entity").Tasks;
}
