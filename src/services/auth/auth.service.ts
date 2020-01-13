import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LogService } from 'src/log/log.service';

@Injectable()
export class AuthService {

  constructor(
      private readonly log: LogService,
      private readonly userService: UserService,
  ) {}

  /**
   * Actions to validate authentification and return partial entity.
   * @param username
   * @param testedPassword
   */
  public async validateUser(username, testedPassword): Promise<any> {
    const user = await this.userService.findOneActiveByUsername(username);

    if (user && (await this.userService.checkPassword(user, testedPassword))) {
      this.log.debug(AuthService.name, `Authentification success with username : ${username}`);

      const { password, salt, ...result } = user;
      return result;
    }

    this.log.debug(AuthService.name, `Authentification fail with username : ${username}`);

    return null;
  }
}
