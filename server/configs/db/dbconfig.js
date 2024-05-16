import Sequelize from 'sequelize';

const database = new Sequelize('dbaccmonitoring', 'root', 'password', { 
  host: 'localhost',
  dialect: 'mysql'
});

export default database;