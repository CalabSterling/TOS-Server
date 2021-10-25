const { DataTypes } = require("sequelize");
const db = require("../db");

const Carrier = db.define("carrier" ,{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Carrier;