import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

/** Repository for User entities. */
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  /** Returns activ entity contain given username. */
  public async findOneActiveByUsername(username: string): Promise<User> {
    return this.findOne({ where: { username, disableTag: false } });
  }

  /** Returns all active entities. */
  public async findAllActive(): Promise<User[]> {
    return this.find({where: {disableTag: false}});
  }
}
