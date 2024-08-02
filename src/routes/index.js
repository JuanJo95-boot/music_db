const express = require('express');
const routerSpung = require ('./song.router.js');
const routerGenre = require('./genre.route.js');


const router = express.Router();
// colocar las rutas aquí

router.use('/genres', routerGenre)
router.use('/soungs', routerSpung)


module.exports = router;