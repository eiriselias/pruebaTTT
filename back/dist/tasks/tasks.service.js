"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const tasks_entity_1 = require("./tasks.entity");
const uuid_1 = require("uuid");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
    createTask(title, description) {
        const actualityDate = new Date();
        const lastDate = new Date(actualityDate);
        lastDate.setDate(lastDate.getDate() + 7);
        const newTask = {
            id: (0, uuid_1.v4)(),
            title,
            description,
            status: tasks_entity_1.tasksStatus.PENDING,
            dateFinish: lastDate,
        };
        this.tasks.push(newTask);
        return newTask;
    }
    updateTask(id, updateFields) {
        const task = this.getTaskById(id);
        const newTask = Object.assign(task, updateFields);
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task);
        return newTask;
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map