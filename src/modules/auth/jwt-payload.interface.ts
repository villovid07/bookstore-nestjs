import { RoleType } from "../role/roletype.enum";

export interface IJwTPayload{

    id:number,
    username: string, 
    email:string,
    roles: RoleType[],
    iat?:Date

}