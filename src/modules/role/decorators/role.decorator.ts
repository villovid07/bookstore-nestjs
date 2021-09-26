import { SetMetadata } from '@nestjs/common';

//@Roles('','')
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
