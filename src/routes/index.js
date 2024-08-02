const express = require('express');
const routerSpung = require ('./song.router.js');
const routerArtist = require('./artist.router.js');

const router = express.Router();
// colocar las rutas aquí


router.use('/songs', routerSpung)

router.use('/artists', routerArtist)




module.exports = router;