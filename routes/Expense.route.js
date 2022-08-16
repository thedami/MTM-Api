const express = require('express');
const router = express.Router();
const ExpenseController = require('../controller/Expense.controller');

router.post('/', ExpenseController.addExpense);
router.get('/', ExpenseController.findExpense);
router.get('/:id', ExpenseController.findExpenseByID);
router.put('/:id', ExpenseController.updateExpense);
router.delete('/:id', ExpenseController.deleteById);

module.exports = router;