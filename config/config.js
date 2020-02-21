require ('dotenv').config ();

module.exports = {
  development: {
    username: process.env.DB_USERNAME ||'root',
    password: process.env.DB_PASSWORD ||'root',
    database: process.env.DB_DATABASE ||'mmquote_dev',
    host: process.env.DB_HOST ||'127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  test: {
    username: process.env.DB_USERNAME ||'root',
    password: process.env.DB_PASSWORD ||'root',
    database: process.env.DB_DATABASE ||'mmquote_test',
    host: process.env.DB_HOST ||'127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE,
    // host: process.env.DB_HOST,
    'use_env_variable': 'JAWSDB_URL',
     dialect: 'mysql'
  }
};
