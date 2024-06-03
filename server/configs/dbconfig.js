import Sequelize from 'sequelize';

const database = new Sequelize('dbaccmonitoring', 'user_dbadmin', '1234', { 
  host: '212.38.94.226',
  port: 5434,
  dialect: 'mysql'
});

export default database;