const User = require("./user");
const Carrier = require("./carrier");
const Customer = require("./customer");
const Order = require("./order");
const Site = require("./Site");
const OrderAdmin = require("./orderAdmin");

// Setup Associations
OrderAdmin.belongsTo(Order);
Order.belongsTo(Customer);
Customer.hasMany(User);
Site.belongsTo(Customer);
Carrier.hasOne(OrderAdmin)

//Customer.hasMany(Order);

module.exports = {
  User,
  Carrier,
  Customer,
  Order,
  OrderAdmin,
  Site
};
