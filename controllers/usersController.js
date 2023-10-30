const {user} = require('../models');

// how to pass data into sequelize
//sequelize uses promises by default
const createUser = async (req, res) => {

    try{
const newUser = await User.create ({
    firstName: req.body.firstname,
    email: req.body.email
    //other two have defaults, dont need to pass
    
})
    } catch (err)
{
    res.json(err);
}}

moduule.exports = {
    createUser,
}