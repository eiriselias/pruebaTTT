import { Body, Injectable } from '@nestjs/common';
import { UserNewDto } from 'src/dto/user.dto';
import { Tasks } from 'src/tasks/tasks.entity';
import { v4 } from 'uuid';

export type User = {
    userId: string,
    userName: string,
    userPassword: string,
    tasks: Tasks[]
}

@Injectable()

export class UsersService {

    private users: User[] =[
        {
            userId: v4(),
            userName:"admin",
            userPassword:"admin1",
            tasks:[]
        }
    ]
    async findOne(userName: string): Promise<User|undefined>{
        return this.users.find(user=>user.userName===userName)
    }

    createUser(user:UserNewDto){
        const newUser = {
            userId: v4(),
            userName: user.userName,
            userPassword: user.userPassword,
            tasks: user.tasks
        }
        this.users.push(newUser)
    }
}
