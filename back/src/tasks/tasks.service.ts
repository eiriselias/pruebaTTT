import { Injectable } from '@nestjs/common';
import { Tasks, tasksStatus } from './tasks.entity';
import { v4 } from 'uuid'
import { updateTaskDto } from 'src/dto/tasks.dto';

@Injectable()
export class TasksService {

    private tasks:Tasks[] = []

    getAllTasks(){
        return this.tasks
    }

    getTaskById(id: string){
        return this.tasks.find(task=> task.id === id)
    }
    
    createTask(title:string, description:string){

        const actualityDate = new Date()
        const lastDate = new Date(actualityDate)

        lastDate.setDate(lastDate.getDate() + 7)

        const newTask = {
            id: v4(),
            title,
            description, 
            status: tasksStatus.PENDING,
            dateFinish: lastDate,
        }

        this.tasks.push(newTask)

        return newTask
    }

    updateTask(id: string, updateFields: updateTaskDto): Tasks{
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updateFields)
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
        return newTask;
    }

    deleteTask(id: string){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}
