import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/databases/repositories/user.repository';
import { User } from 'src/databases/entities/user.entity';
import * as Bcrypt from 'bcrypt';
import { environmentDev } from 'environment/environment.dev';

@Injectable()
export class UserService {

  constructor(
      private readonly repository: UserRepository,
  ) {}

  /** Returns active entity for given username. */
  public async findOneActiveByUsername(username: string): Promise<User> {
    return this.repository.findOneActiveByUsername(username);
  }

  /** Returns all active entities. */
  public async findAllActive(): Promise<User[]> {
    return this.repository.findAllActive();
  }

  /**  */
  public async count(): Promise<number> {
    return this.repository.count();
  }

  /**
   * Creates new entity for given data.
   * @param email
   * @param username
   * @param password
   */
  public async createOne(email: string, username: string, password: string): Promise<User> {
    const entity = new User();

    entity.email = email;
    entity.username = username;
    entity.salt = await Bcrypt.genSalt(environmentDev.security.roundEncryption);
    entity.password = await Bcrypt.hash(password, entity.salt);

    return this.repository.save(entity);
  }

  /**
   * Says if the given password is the good password.
   * @param user
   * @param testedPassword - Password to test.
   */
  public async checkPassword(user: User, testedPassword: string): Promise<boolean> {
    return user.password === (await Bcrypt.hash(testedPassword, user.salt));
  }
}
