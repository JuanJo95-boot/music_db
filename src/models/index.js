const Song = require("./Song");
const Artist = require("./Artist");

Song.belongsToMany(Artist, { through: 'songArtists' })
Artist.belongsToMany(Song, { through: 'songArtists' })










