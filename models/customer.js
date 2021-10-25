const { DataTypes } = require("sequelize");
const db = require("../db");

const Customer = db.define("customer" ,{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email2: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

module.exports = Customer;