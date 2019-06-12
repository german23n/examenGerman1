var express = require('express');
var router= express.Router();

var recetasRouter = require('./recetas');
router.use('/recetas',recetasRouter);
module.exports = router;