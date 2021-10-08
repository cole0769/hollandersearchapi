module.exports = {
  USER: 'hollander-searchi',
  PASSWORD: 'H0ll@nd3rAPI!!',
  DB: 'HollanderSupport',
  HOST: 'PROD-SQL',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
