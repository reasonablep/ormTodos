const router = require ('express').Router();

const userRoutes = require('./userRoutes');

router.user('/user', userRoutes);


module.exports = router;