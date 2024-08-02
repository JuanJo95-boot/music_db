const express = require('express');
const routerSpung = require ('./song.router.js')


const router = express.Router();
// colocar las rutas aquí


router.use('/songs', routerSpung)


module.exports = router;