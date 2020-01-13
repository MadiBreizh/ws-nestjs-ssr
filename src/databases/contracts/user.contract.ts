/**
 * Contracts for User entity.
 */
export abstract class UserContract {

  /** Constant used for table name. */
  static readonly TAB_NAME = 'user';

  /** Constant used for email field. */
  static readonly COL_EMAIL = 'email';

  /** Constant used for username field. */
  static readonly COL_USERNAME = 'username';

  /** Constant used for password field. */
  static readonly COL_PASSWORD = 'password';

  /** Constant used for salt field. */
  static readonly COL_SALT = 'salt';
}
