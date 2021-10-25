const { DataTypes } = require("sequelize");
const db = require("../db");

const Site = db.define("site" ,{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Site;