import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserContract } from '../contracts/user.contract';
import { BaseContract } from '../contracts/base.contract';

/**
 * User of the application.
 */
@Entity({name : BaseContract.TABLE_PREFIX + UserContract.TAB_NAME})
export class User extends BaseEntity {

  /** A email address can be used only once. */
  @Column('varchar', { name: UserContract.COL_EMAIL, length: 255, unique: true })
  email: string;

  /** A user has only a username. No firstname nor lastname. */
  @Column('varchar', { name: UserContract.COL_USERNAME, length: 255, unique: true })
  username: string;

  /** Encrypted password. */
  @Column('varchar', { name: UserContract.COL_PASSWORD, length: 255 })
  password: string;

  /** Each user has his own salt. */
  @Column('varchar', { name: UserContract.COL_SALT, length: 255 })
  salt: string;
}
