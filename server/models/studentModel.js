import { DataTypes } from "sequelize";
import database from '../configs/dbconfig.js';

const Student = database.define('student', {
    studentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentEmail: {
        type: DataTypes.STRING,
        allownull: false,
    },
    studentNo: {
        type: DataTypes.STRING,
        allownull: false
    },
    student_fullName: {
        type: DataTypes.STRING,
        allownull: false,
    },
    studentSection: {
        type: DataTypes.STRING,
        allownull: false
    },
    Type: {
        type: DataTypes.STRING,
        allownull: false,
    },
});

(async () => {
    await database.sync();
})();

export default Student;