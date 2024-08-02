//Gabriel
const catchError = require('../utils/catchError');
const Soungs = require('../models/Soungs');

// Get All
const getAll = catchError(async (req, res) => {
    const result = await Soungs.findAll();
    return res.json(result);
});

// Get One
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Soungs.findByPk(id);
    return !result ? res.status(404).json({ msj: 'Nada q Mostrar' }) : res.json(result);
});

// POST
const create = catchError(async (req, res) => {
    const result = await Soungs.create(req.body);
    return res.status(201).json(result);
});

// UPDATE
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Soungs.update(req.body, { where: { id }, returning: true });
    return result[0] === 0 ? res.sendStatus(404) : res.json(result[1][0]);
});

// DELETE
const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Soungs.destroy({ where: { id } });
    return !result ? res.status(404).json({ msj: 'Nada Para mostrar' }) : res.status(204).json({ msg: 'Dato Eliminado con Exito' });
});


const setSongs = catchError(async (req, res) => {
    //! 1- identificar al estudiante
    const { id } = req.params
    const artist = await Artist.findByPk(id)
  
    //!  2- seteo los cursos a los estudiantes
    await artist.setCourses(req.body)
  
    //!  3- Obtengo lo que setee, con el objetivo de dar la vista
    const songs = await artist.getCourses()
  
    //!  4 finalmente retorno
    return res.json(songs)
  
  })


module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy,
    setSongs
};