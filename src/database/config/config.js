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
  production: {
    use_env_variable: "DATABASE_URL_PROD",
    dialect: "mysql",
  },
};
