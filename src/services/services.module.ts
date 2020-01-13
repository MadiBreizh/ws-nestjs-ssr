import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { DatabasesModule } from 'src/databases/databases.module';
import { LogService } from '../log/log.service';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [
    DatabasesModule,
    LogModule,
  ],
  providers: [
    UserService,
    LogService,
  ],
  exports: [
    UserService,
    LogService,
  ],
})
export class ServicesModule {}
