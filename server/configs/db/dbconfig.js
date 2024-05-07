import Sequelize from 'sequelize';


const database = new Sequelize(
  'dbticketsys', 
  'root', 
  'password', 
  { 
  host: 'localhost',
  dialect: 'mysql'
});

export default database;