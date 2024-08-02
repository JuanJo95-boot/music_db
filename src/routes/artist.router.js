const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/artist.controllers");
const express = require("express");

const routerArtist = express.Router();

routerArtist.route("/").get(getAll).post(create);

routerArtist.route("/:id").get(getOne).delete(remove).put(update);

routerArtist.route('/:id/songs')
  .post(setSongs);



module.exports = routerArtist;
