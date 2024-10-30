import { IsString, IsOptional, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { tasksStatus } from "src/tasks/tasks.entity";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    description: string;
}

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    @MinLength(3)
    title?: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    description?: string;

    @IsOptional()
    @IsEnum(tasksStatus)
    status?: tasksStatus;

    @IsOptional()
    dateFinish?: Date;
}
