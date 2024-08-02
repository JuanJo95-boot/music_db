const Song = require("./Song");
const Artist = require("./Artist");
const Genre = require("./Genre");

Song.belongsToMany(Artist, { through: 'songArtists' })
Artist.belongsToMany(Song, { through: 'songArtists' })











const Genre = require("./Genre");
Artist.belongsToMany(Genre, { through: 'coursesStudents' })
Genre.belongsToMany(Artist, { through: 'coursesStudents' })
