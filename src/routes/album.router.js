//Cesar
const { getAll, create, getOne, destroy, update } = require('../controllers/album.controllers');
const express = require('express');
const albumRouter = express.Router();
albumRouter.route("/id")
        .get(getAll)
        .post(create)
albumRouter.route("/:id")
        .get(getOne)
        .delete(destroy)
        .put(update)
module.exports = albumRouter;