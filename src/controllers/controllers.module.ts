import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { ServicesModule } from 'src/services/services.module';

@Module({
  imports: [
    ServicesModule,
  ],
  controllers: [
    AppController,
    UserController,
  ],
})
export class ControllersModule {}
