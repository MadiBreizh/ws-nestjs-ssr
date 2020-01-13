import { Controller, UseGuards, Get, Render, UseFilters, UseInterceptors } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/services/auth/authenticated.guard';
import { AuthExceptionFilter } from 'src/services/common/filters/auth-exceptions.filter';
import { UserService } from 'src/services/user/user.service';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('user')
@UseFilters(AuthExceptionFilter)
@UseInterceptors(LoggingInterceptor)
export class UserController {

  constructor(private readonly service: UserService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('/')
  @Render('user/user-list.hbs')
  getHome() {
    return { entities: this.service.findAllActive() };
  }
}
