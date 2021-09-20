import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly _userService: UserService
    ){

    }


    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id:number): Promise<UserDTO>{
        const user = await this._userService.get(id);
        return user
    }

    @Get()
    async getUsers(): Promise<UserDTO[]>{
        const users = await this._userService.getAll();
        return users;
    }

    @Post()
    async createUser(@Body() user: User): Promise<UserDTO>{
        const createdUser = await this._userService.create(user);
        return createdUser;
    }

    @Patch(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number , @Body() user : User){
        const updatedUser= await this._userService.update(id, user);
        return true;
    }

    @Delete(':id')
    async deleteduser (@Param('id', ParseIntPipe) id:number){
        const deletedUser = await this._userService.delete(id);
        return true;
    }

}
