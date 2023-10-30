const Sequelize = require('sequelize');
require('dotenv').config();

// the above const is a class, must use "new" keyword

const Sequelize = new Sequelize(prcess.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = Sequelize;

//takes DB name, db user, db password, and server configuration object

// allows connection to db via sequellize**

