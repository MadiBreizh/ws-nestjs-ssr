export interface Environment {
  /** Set mode. */
  production?: boolean;
  /** Set server port to listen. */
  port?: number;
  /** Set the version number of this server. */
  versionNumber?: string;
  /** Database configuration */
  database: {
    /** Database type. You must specify what database engine you use.
     *  Possible values are "mysql", "postgres", "cockroachdb", "mariadb",
     *  "sqlite", "cordova", "nativescript", "oracle", "mssql", "mongodb",
     *  "sqljs", "react-native".
     */
    type: any,
    /** Database host. */
    host: string,
    /** Database host port. */
    port: number,
    /** Database username. */
    username: string,
    /**  Database password. */
    password?: string,
    /**  Database name. */
    database: string,
    /** Indicates if database schema should be auto created on every application launch. */
    synchronize: boolean,
    /** Drops the schema each time connection is being established. Be careful with this option and don't use this in production. */
    dropSchema: boolean,
    /**  Enables entity result caching. */
    cache: boolean,
    /** Indicates if logging is enabled or not. If set to true then query and error logging will be enabled. */
    logging: boolean,
  },
  /** Security configuration. */
  security: {
    /** The cost of processing the data. */
    roundEncryption: number,
  },
}
