const {expenseModel} = require("../models/expense.model");
const validator = require("../validators/expense.validator");
const {formatZodError} = require("../utilities/errormessage");

// get all expenses
async function getAllExpenses(req, res) {
    // const expense = expenses.find(r => r.id === req.params.expenseId);
    const expenses = await expenseModel.find();

    res.json(expenses).end();
}

// get single expense
async function getSingleExpense(req, res) {
    // expenses.push({
    //     ...req.body,
    //     id: (expenses.length + 1).toString()
    // });
    
    const result = validator.getExpenseValidator.safeParse(req.params.expenseId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    const expense = await expenseModel.findById(req.params.expenseId);

    res.json(expense).end();
}

// add new expense
async function addExpense(req, res) {
    // expenses.push({
    //     ...req.body,
    //     id: (expenses.length + 1).toString()
    // });
    const result = validator.addExpenseValidator.safeParse(req.body);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await expenseModel.create({
        date: req.body.date,
        description: req.body.description,
        quantity: req.body.price,
        price: req.body.price
    });

    res.json("expense added").end();
}

// update expense
async function udpateExpense(req, res) {
    // expenses = expenses.map(r => {
    //     if (r.id === req.params.expenseId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })
    const result = validator.updateExpenseValidator.safeParse(req.params.expenseId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await expenseModel.updateOne({_id: req.params.expenseId}, {...req.body});

    res.json("expense updated successfully!").end();
}

// delete expense
async function deleteExpense(req, res) {
    // expenses = expenses.filter(r => r.id !== req.params.expenseId);
    const result = validator.deleteExpenseValidator.safeParse(req.params.expenseId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await expenseModel.deleteOne({_id: req.params.expenseId});

    res.json("expense deleted").end();
}

module.exports = {
    getAllExpenses,
    getSingleExpense,
    addExpense,
    udpateExpense,
    deleteExpense
}