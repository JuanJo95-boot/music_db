//Gabriel
const { getAll, getOne, create, update, destroy, setGenres } = require('../controllers/song.controllers');
//  getAll,

const express = require('express');

const songRouter = express.Router();

songRouter.route('/')
    .get(getAll)
    .post(create);

songRouter.route('/:id/genres')
    .post(setGenres)


songRouter.route('/:id')
    .get(getOne)
    .delete(destroy)
    .put(update);

module.exports = songRouter;