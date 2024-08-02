const express = require('express');
const routerSpung = require ('./song.router.js')


const router = express.Router();
// colocar las rutas aquí


router.use('/soungs', routerSpung)


module.exports = router;