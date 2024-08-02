const Song = require('./Song');
const Genre = require('./Genre');
const Album = require("./Album");
const Artist = require("./Artist");

Song.belongsToMany(Genre, {through: 'songsGenres'});
Genre.belongsToMany(Song, {through: 'songsGenres'});

Song.belongsTo(Album)
Album.hasMany(Song)

Album.belongsTo(Artist)
Artist.hasMany(Album)

Genre.belongsToMany(Artist, {through: 'genreArtists'})
Artist.belongsToMany(Genre, {through: 'genreArtists'})

Song.belongsToMany(Artist, {through: 'songArtists' })
Artist.belongsToMany(Song, {through: 'songArtists'})
