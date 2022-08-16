const Sequelize = require('sequelize');
const db = require('../config/database');

const Artist = db.define('artist',{  
    ArtistID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false  },
    LastName: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true }},
    FirstName: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true} },
    Gender: { type: Sequelize.STRING, allowNull: false},
    Address: {type: Sequelize.STRING, allowNull: true, validate: {isAlpha: true}},
    Telephone: {type: Sequelize.INTEGER, allowNull: false, validate: {isInt: true}},
    Email: { type: Sequelize.STRING, allowNull: false, validate: {isEmail: true} },
    AManagerID: { type: Sequelize.STRING, allowNull: true, validate: {isInt: true} },
});  
module.exports = Artist;