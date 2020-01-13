import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { LogService } from 'src/log/log.service';
import { UserService } from 'src/services/user/user.service';

@Injectable()
export class UsersFixture implements OnApplicationBootstrap {

  constructor(
      private readonly service: UserService,
      private readonly log: LogService,
  ) { }

  async onApplicationBootstrap(): Promise<any> {
    const row = await this.service.count();

    if (row === 0) {
      this.service.createOne(
        'admin@local',
        'admin',
        'password',
      );
      this.log.debug(UsersFixture.name, 'Fixtures loaded.');
    } else {
      this.log.debug(UsersFixture.name, 'Data already present.');
    }
  }
}
