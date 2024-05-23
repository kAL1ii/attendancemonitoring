import { DataTypes } from 'sequelize';
import database from '../configs/db/dbconfig.js';

const Accounts = database.define('account', {
    accountID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    account_fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    account_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    account_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    account_timein: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    account_timeout: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    account_isPresent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

(async () => {
    await database.sync();
})();

export default Accounts;