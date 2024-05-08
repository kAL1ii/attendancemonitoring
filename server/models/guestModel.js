// Importing the sequelize library and database configuration
import { DataTypes, Sequelize } from 'sequelize';
import database from '../configs/db/dbconfig.js';

// Defining the table schema
const guest = database.define('tblguest', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: false,
    timestamps: false
});

// Synchronizing the table schema
// Automatically generates the schema for the table
(async () => {
    await database.sync();
})();

// Don't forget to export this
export default guest;