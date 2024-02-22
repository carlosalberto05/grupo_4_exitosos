module.exports = {
  development: {
    use_env_variable: "DATABASE_URL_DEV",
    dialect: "mysql",
  },
  test: {
    use_env_variable: "DATABASE_URL_TEST",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "DATABASE_URL_PROD",
    dialect: "mysql",
  },
  // production: {
  //   dialect: "mysql",
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DATABASE,
  //   port: process.env.DB_PORT,
  //   host: process.env.DB_HOST,
  // },
};
