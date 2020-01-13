import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UsersFixture } from '../fixtures/user.fixtures';
import { environmentDev } from 'environment/environment.dev';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environmentDev.database,
      entities: [
        User,
      ],
    }),
    TypeOrmModule.forFeature([
      UserRepository,
    ]),
  ],
  exports: [
    TypeOrmModule,
  ],
})
export class DatabasesModule {}
