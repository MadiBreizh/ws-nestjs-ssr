import { Environment } from './environment';

export const environmentDev: Environment = {
  port: 3000,
  versionNumber: '0.1.0',
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'mywakeboardapp',
    synchronize: true,
    dropSchema: true,
    cache: false,
    logging: true,
  },
  security: {
    roundEncryption: 10,
  },
};
