import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LogService } from 'src/log/log.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {

  constructor(
    private readonly log: LogService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();

    return next
      .handle()
      .pipe(tap(() => this.log.debug(context.getClass().name, `${request.user ? request.user.username : 'anonymous'} : Action ${context.getHandler().name} => +${Date.now() - now}ms`)));
  }
}
