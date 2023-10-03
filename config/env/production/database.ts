
import { parse } from 'pg-connection-string';
const config = parse(process.env.DATABASE_URL);
console.log(config)
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    acquireConnectionTimeout: 1000000,
    pool: {
      min: 0,
      max: 4,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 300000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis:1000,
      createRetryIntervalMillis: 2000
    },
    debug: false,
  },
});
