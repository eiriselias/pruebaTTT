import { Body, Controller, Post } from '@nestjs/common';
import { User, UsersService } from './users.service';
import { UserNewDto } from 'src/dto/user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService:UsersService){}

    @Post()
    createUser(@Body() newUser:UserNewDto){
       
        return this.usersService.createUser(newUser)
    }
}
