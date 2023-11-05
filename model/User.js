// const {Model, DataTypes, UUIDV4} = require('sequelize');
// const sequelize = require('../config/connection');


//class that inherits allmethods of Model
// class User extends Model {}

//2 param
//1. object defines columns and conifgs -- id column with 4 configs defined
//2. configs certain options for db
// NOTE: UUID has different versions, 4 is random. Others have options like timestamp.
// User.init (
//     {id: 
//         {
//         type: DataTypes.UUID,
//         allowNull: false,
//         primaryKey: true,
//         defaultValue: UUIDV4
//     }},

//     {
//         firstName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len:[1,30]

//             }
//         },

//         isLoggedIn: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//             defaultValue: false
        
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true
//                 //sequelize will ensure it is a valid e-mail via pattern check
//             }
//         },

//     },

    //sequelize extends modelOptions, hold cmd click to go a lvl deeper
    //2nd parameter hence 2nd comma above ^
//     {
//     sequelize,
//     modelName: "user"
//     }
// )

// module.exports = user;
