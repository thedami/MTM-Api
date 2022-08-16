const Sequelize = require('sequelize');
const db = require('../config/database');

const Expense = db.define('expense',{
    ExpenseID: { type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true, allowNull: false},
    Description: { type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true }},
    Amount: { type: Sequelize.INTEGER, allowNull: false, validate: {isInt: true}},
    IncuredBy: {type: Sequelize.STRING, allowNull: false, validate: {isAlpha: true}}
}); 
module.exports = Expense;