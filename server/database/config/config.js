const sqlite3 = require('sqlite3')

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./server/database/config/database.sqlite",
    dialectModule: sqlite3
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};



