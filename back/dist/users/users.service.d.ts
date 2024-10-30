import { UserNewDto } from 'src/dto/user.dto';
import { Tasks } from 'src/tasks/tasks.entity';
export type User = {
    userId: string;
    userName: string;
    userPassword: string;
    tasks: Tasks[];
};
export declare class UsersService {
    private users;
    findOne(userName: string): Promise<User | undefined>;
    createUser(user: UserNewDto): void;
}
