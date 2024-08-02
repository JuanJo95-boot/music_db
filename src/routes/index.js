const express = require('express');
const routerSong = require ('./song.router.js')
const routerGenre = require('./genre.route.js');
const albumRouter = require('./album.router.js');
const routerArtist = require('./artist.router.js');

const router = express.Router();
// colocar las rutas aquí


router.use('/songs', routerSong)
router.use('/genres', routerGenre)
router.use('/albums', albumRouter)
router.use('/artists', routerArtist);








module.exports = router;