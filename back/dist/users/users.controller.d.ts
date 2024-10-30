import { UsersService } from './users.service';
import { UserNewDto } from 'src/dto/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(newUser: UserNewDto): void;
}
