const express = require('express');
const { Sequelize } = require('sequelize');
const routes = require ('routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use (express.urlencoded({extended: true}));

app.use(routes);

Sequelize.sync().then(()=>{
    app.listen(PORT, () => console.log('now listening'))
});