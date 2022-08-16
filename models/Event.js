const Sequelize = require('sequelize');
const db = require('../config/database');


const Event = db.define('event', {
    EventID: {type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false},
    Description: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}},
    Date: { type: Sequelize.STRING, allowNull: false, validate: {isDate: true}},
    Time: {type: Sequelize.STRING, allowNull: false},
    Venue: {type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}},
    Country: {type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}},
    Address: {type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}}
});
module.exports = Event;