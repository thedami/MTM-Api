const Sequelize = require('sequelize');
const db = require('../config/database');


const Contract = db.define('contract', {
    ContractID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false },
    StartDate: { type: Sequelize.DATE, allowNull: false, validate: {isDate: true}},
    EndDate: { type: Sequelize.DATE, allowNull: false, validate: {isDate: true}},
    RoyaltyPercentage: {type: Sequelize.STRING, allowNull: false, validate: {isInt: true}},
    ContractTerms: {type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}}
}); 
module.exports = Contract;