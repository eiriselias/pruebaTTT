import { Injectable } from '@nestjs/common';

export type User = {
    userId: string,
    userName: string,
    userPassword: string
}

@Injectable()
export class UsersService {
    private users: User[] =[
        {
            userId: "1",
            userName:"admin",
            userPassword:"admin1"
        }
    ]
    async findOne(userName: string): Promise<User|undefined>{
        return this.users.find(user=>user.userName===userName)
    }
}
