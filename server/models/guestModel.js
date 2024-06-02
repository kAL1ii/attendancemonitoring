import { DataTypes } from "sequelize";
import database from '../configs/dbconfig.js';

const Guest = database.define('guest', {
    guestID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    guestEmail: {
        type: DataTypes.STRING,
        allownull: false,
    },
    guest_fullName: {
        type: DataTypes.STRING,
        allownull: false,
    },
    Type: {
        type: DataTypes.STRING,
        allownull: false,
    },
});

(async () => {
    await database.sync();
})();

export default Guest;