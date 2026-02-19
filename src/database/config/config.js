module.exports = {
  development: {
    use_env_variable: "DATABASE_URL_DEV",
    url: process.env.DATABASE_URL_DEV || "sqlite://dev.sqlite",
    dialect: process.env.DB_DIALECT || "mysql",
    storage: "./database.sqlite",
  },
  test: {
    use_env_variable: "DATABASE_URL_TEST",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "DATABASE_URL_PROD",
    dialect: "mysql",
  },
};
