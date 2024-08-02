//Gabriel
const { getAll, getOne, create, update, destroy } = require('../controllers/soungs.controllers');
//  getAll,

const express = require('express');

const soungsRouter = express.Router();

soungsRouter.route('/')
    .get(getAll)
    .post(create);

soungsRouter.route('/:id')
    .get(getOne)
    .delete(destroy)
    .put(update);

module.exports = soungsRouter;