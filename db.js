const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to database');
    },
    function(err){
        console.log(err);
    }
)
module.exports = db;