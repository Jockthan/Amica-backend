const {Router} = require("express");
const controller = require("../controllers/expense.controller");

const router = Router();

// get all expense
router.get('/', controller.getAllExpenses);

// get all expense sum
router.get('/sum', controller.getAllExpensesSum);

// get single expense
router.get('/:expenseId', controller.getSingleExpense);

// add new expense
router.post('/', controller.addExpense);

// update expense
router.patch('/:expenseId', controller.udpateExpense);

// delete expense
router.delete('/:expenseId', controller.deleteExpense);

module.exports.expenseRouter = router;