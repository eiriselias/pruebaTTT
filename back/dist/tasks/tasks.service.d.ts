import { Tasks, tasksStatus } from './tasks.entity';
import { updateTaskDto } from 'src/dto/tasks.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Tasks[];
    getTaskById(id: string): Tasks;
    createTask(title: string, description: string): {
        id: string;
        title: string;
        description: string;
        status: tasksStatus;
        dateFinish: Date;
    };
    updateTask(id: string, updateFields: updateTaskDto): Tasks;
    deleteTask(id: string): void;
}
