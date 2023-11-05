const Sequelize = require('sequelize');
// require('dotenv').config();


// the above const is a class, must use "new" keyword

const sequelize = new Sequelize(

    // process.env.DB_NAME,
    // process.env.DB_USER,
//database location

    {
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize;

//takes DB name, db user, db password, and server configuration object

// allows connection to db via sequellize**

