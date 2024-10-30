export type User = {
    userId: string;
    userName: string;
    userPassword: string;
};
export declare class UsersService {
    private users;
    findOne(userName: string): Promise<User | undefined>;
}
