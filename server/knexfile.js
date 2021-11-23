module.exports = {

  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host: '127.0.0.1',
      user: 'ubikate_admin',
      password: 'admin',
      database: 'ubikate_db',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './dist/database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './dist/database/seeds/develpment'
    }
  },

  production: {
    client: 'mysql',
    // connection: process.env.DATABASE_URL,
    // connection: {
    //   host: process.env.DB_HOST,
    //   user: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    //   charset: 'utf8'
    // },
    connection: {
      host: 'us-cdbr-iron-east-02.cleardb.net',
      user: 'ba5f89a854bcf4',
      password: '937d6063',
      database: 'heroku_4d217d17479b474',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './dist/database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './dist/database/seeds/production'
    }
  }

};