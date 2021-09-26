import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly _reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    //pasa los roles del decorador
    const roles: string[] = this._reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { user } = request;

    const hasRole = () =>
      user.roles.some((role: string) => roles.includes(role));

    return user && user.roles && hasRole();
  }
}
