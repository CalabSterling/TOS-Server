const { DataTypes } = require("sequelize");
const db = require("../db");

const OrderAdmin = db.define("orderadmin" ,{
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    equipment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sellRate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    proNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    pickupTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    carrierId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = OrderAdmin;