import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService} from '../users/users.service'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor( private usersService: UsersService,
        private jwtService: JwtService
     ){}
    
    async signIn(userName:string, pass:string ):Promise <{acces_token: string}> {

        const user = await this.usersService.findOne(userName)

        if(user?.userPassword !== pass){
            throw new UnauthorizedException()
        }

        const payload = {sub: user.userId, userName:user.userName}

        return { acces_token: await this.jwtService.signAsync(payload), ...user}
    }
}

