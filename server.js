// imports
const express = require('express');
const bodyParser = require('body-parser');

// routes
const routes = require('./routes');

// express
const app = express();

// rotas
app.use(bodyParser.json());
app.use(routes);


module.exports = app;
