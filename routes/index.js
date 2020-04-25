const express = require('express');
const users = require('./users');

// * Instancia do router
const router = express.Router();



// * Rotas Base
router.use('/users', users);

module.exports = router;