import { IsString, MinLength } from "class-validator"

export class AuthLoginDto{
    @IsString()
    @MinLength(3)
    userName:string

    @IsString()
    @MinLength(4)
    userPassword:string
}