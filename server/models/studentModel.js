import { DataTypes } from 'sequelize';
import database from '../configs/db/dbconfig.js';

const student = database.define('tblstudent', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studentName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    section: {
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
    },
}, {
    freezeTableName: true,
    timestamps: false
});

// Synchronizing the table schema
// Automatically generates the schema for the table
(async () => {
    await database.sync();
})();

export default student;
