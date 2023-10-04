import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const bearerHeader = req.headers.authorization;
    const token = bearerHeader && bearerHeader.split(' ')[1];

    const authCookie = req.cookies['next-auth.session-token'];

    const chosenToken = authCookie || token;

    if (!chosenToken) {
      throw new UnauthorizedException();
    }

    if (!chosenToken) {
      throw new UnauthorizedException();
    }

    try {
      // Decode and verify JWT.
      const user = await this.jwtService.verify(chosenToken, {
        secret: process.env.JWT_SECRET,
      });
      console.log('------user ', user);
      // Attach user to request.
      req.user = user;
    } catch (err) {
      console.log('err', err);
      throw new UnauthorizedException();
    }

    const allowUnauthenticated = this.reflector.getAllAndOverride<boolean>(
      'allowUnauthenticated',
      [context.getHandler(), context.getClass()],
    );

    if (!req.user && !allowUnauthenticated) {
      throw new UnauthorizedException();
    }

    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles?.length === 0) {
      return true;
    }

    return requiredRoles?.some((role) => req.user?.roles?.includes(role));
  }
}
