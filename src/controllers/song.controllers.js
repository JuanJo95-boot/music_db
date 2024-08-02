//Gabriel
const catchError = require('../utils/catchError');
const Song = require('../models/Song');
const Genre = require('../models/Genre');

// Get All
const getAll = catchError(async (req, res) => {
    const result = await Song.findAll();
    return res.json(result);
});

// Get One
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Song.findByPk(id);
    return !result ? res.status(404).json({ msj: 'Nada q Mostrar' }) : res.json(result);
});

// POST
const create = catchError(async (req, res) => {
    const result = await Song.create(req.body);
    return res.status(201).json(result);
});

// UPDATE
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Song.update(req.body, { where: { id }, returning: true });
    return result[0] === 0 ? res.sendStatus(404) : res.json(result[1][0]);
});

// DELETE
const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Song.destroy({ where: { id } });
    return !result ? res.status(404).json({ msj: 'Nada Para mostrar' }) : res.status(204).json({ msg: 'Dato Eliminado con Exito' });
});

//!Seteo de los géneros en las canciones
const setGenres = catchError(async (req, res) =>{
    const { id } = req.params
    const song = await Song.findByPk(id)

    await song.setGenres(req.body)

    const Genres = await song.getGenres()

    return res.json(Genres)
})



module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy,
    setGenres
};