//Juan David
const catchError = require("../utils/catchError");
const Artist = require("../models/Artist");
const Genre = require("../models/Genre");

const getAll = catchError(async (req, res) => {
  const results = await Artist.findAll( {include: [Genre]});
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Artist.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Artist.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Artist.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Artist.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});


const setArtists = catchError(async (req, res) => {
  //! 1- identificar al estudiante
  const { id } = req.params
  const song = await Song.findByPk(id)

  //!  2- seteo los cursos a los estudiantes
  await song.setCourses(req.body)

  //!  3- Obtengo lo que setee, con el objetivo de dar la vista
  const artists = await song.getCourses()

  //!  4 finalmente retorno
  return res.json(artists)

})

const setGenres = catchError(async(req,res)=>{    
  //identificar el artista
  const {id} = req.params;  
  const artist = await Artist.findByPk(id)    
 //setear los generoa del artista
  await artist.setGenres(req.body)    
  // Obtener lo que acabo de setear para darle vista
  const genres = await artist.getGenres()    
  //retornamos los generos
  return res.json(genres)
});



module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  setArtists,
  setGenres
};
