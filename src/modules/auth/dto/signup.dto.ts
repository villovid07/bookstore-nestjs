import { IsNotEmpty, IsString } from "class-validator";

export class SignUpDTO {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    email: string;
}