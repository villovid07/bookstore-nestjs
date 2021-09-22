import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO, SignUpDTO } from './dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly _authService:AuthService
    ){

    }

    @Post('/signup')
    @UsePipes(ValidationPipe)
    async signUp(@Body() signupDTO : SignUpDTO): Promise<void> {

        try {
            return this._authService.signup(signupDTO);    
        } catch (error) {
            console.log(error);
        }
        
    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    async signin(@Body() signinDTO: SignInDTO){
        return this._authService.signin(signinDTO);
    }
}
