const { DataTypes } = require("sequelize");
const db = require("../db");

const Order = db.define("order" ,{
    pickupSite: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dropoffSite: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pickupDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    tempControl: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    referenceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    palletCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    tempSet: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Order;