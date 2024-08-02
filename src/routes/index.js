const express = require('express');
const routerSpung = require ('./song.router.js');
const routerGenre = require('./genre.route.js');

const routerSpung = require ('./song.router.js');
const routerArtist = require('./artist.router.js');

const router = express.Router();
// colocar las rutas aquí

router.use('/genres', routerGenre)
router.use('/soungs', routerSpung)

router.use('/songs', routerSpung)

router.use('/artists', routerArtist)




module.exports = router;