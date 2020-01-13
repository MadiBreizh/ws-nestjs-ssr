import { UsersFixture } from './user.fixtures';
import { ServicesModule } from 'src/services/services.module';
import { LogModule } from 'src/log/log.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ServicesModule,
    LogModule,
  ],
  providers: [
    UsersFixture,
  ],
})
export class FixturesModule {}
