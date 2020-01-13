import {
    Controller,
    Get,
    Post,
    Request,
    Res,
    Render,
    UseGuards,
    UseFilters,
    UseInterceptors,
  } from '@nestjs/common';
import { Response } from 'express';
import { LoginGuard } from 'src/services/common/guards/login.guard';
import { AuthenticatedGuard } from 'src/services/auth/authenticated.guard';
import { AuthExceptionFilter } from 'src/services/common/filters/auth-exceptions.filter';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller()
@UseFilters(AuthExceptionFilter)
@UseInterceptors(LoggingInterceptor)
export class AppController {

  @Get('/')
  @Render('login')
  async index(@Request() req) {
    return {
        message: req.flash('loginError'),
    };
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Res() res: Response) {
    res.redirect('/home');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  @Render('home')
  getHome(@Request() req) {
    return {
      title: 'HomePage',
      user: req.user,
    };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  @Render('profile')
  getProfile(@Request() req) {
    return { user: req.user };
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response) {
    req.logout();
    res.redirect('/');
  }
}
