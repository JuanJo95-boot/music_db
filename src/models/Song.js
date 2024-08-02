//Gabriel
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

// En Mayúsculas y singular
const Songs = sequelize.define('song', {
    // Definimos las columnas aquí
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    albumld: {
        type: DataTypes.STRING(100)
        // allowNull por defecto esta en true
    }
});

module.exports = Songs;