const Sequelize = require('sequelize');
const db = require('../config/database');

const Recommendation = db.define('recommendation',{
    RecommendationID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false},
    Description: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}},
    DateReceived: { type: Sequelize.DATE, allowNull: false, validate: {isDate: true}},
});
module.exports = Recommendation;