import { DataTypes } from "sequelize";
import database from '../configs/dbconfig.js';

const Relative = database.define('relative', {
    relativeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    relativeEmail: {
        type: DataTypes.STRING,
        allownull: false,
    },
    relativefullName: {
        type: DataTypes.STRING,
        allownull: false,
    },
    referredBy: {
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

export default Relative;