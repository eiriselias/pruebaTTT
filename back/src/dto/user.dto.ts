import { IsString, MinLength } from "class-validator"
import { Tasks } from "src/tasks/tasks.entity"

export class UserNewDto{
    @IsString()
    @MinLength(3)
    userName:string

    @IsString()
    @MinLength(4)
    userPassword:string

    tasks?:Tasks[]
}