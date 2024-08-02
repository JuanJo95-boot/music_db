//Juan David

const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Artist = sequelize.define("artists", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  formationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Artist;
