const Song = require('./Song');
const Genre = require('./Genre');
const Album = require("./Album");
const Artist = require("./Artist");

Song.belongsToMany(Genre, {through: 'songsGenres'});
Genre.belongsToMany(Song, {through: 'songsGenres'});
Album.belongsTo(Artist)
Artist.hasMany(Album)
