import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/modules/user/dto/user.dto";
import { User } from "src/modules/user/user.entity";
import { TypeMapper } from "ts-mapper";

@Injectable()
export class MapperService extends TypeMapper{

    constructor(){
        super();//constructor padre
        this.config();
    }

    private config(){
        this.createMap<User,UserDTO>()
        .map(entity => entity.id, dto => dto.id)
        .map(entity => entity.username, dto => dto.username)
        .map(entity => entity.email, dto => dto.email)
        .map(entity => entity.details, dto => dto.details)
        .map(entity => entity.roles, dto => dto.roles)
    }

}