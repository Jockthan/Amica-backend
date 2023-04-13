const {expenseModel} = require("../models/expense.model");

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
    const expense = await expenseModel.findById(req.params.expenseId);

    res.json(expense).end();
}

// add new expense
async function addExpense(req, res) {
    // expenses.push({
    //     ...req.body,
    //     id: (expenses.length + 1).toString()
    // });

    await expenseModel.create({
        date: req.body.date,
        description: req.body.description,
        amount: req.body.amount
    });

    res.send("expense added").end();
}

// update expense
async function udpateExpense(req, res) {
    // expenses = expenses.map(r => {
    //     if (r.id === req.params.expenseId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })

    await expenseModel.updateOne({_id: req.params.expenseId}, {...req.body});

    res.send("expense updated successfully!").end();
}

// delete expense
async function deleteExpense(req, res) {
    // expenses = expenses.filter(r => r.id !== req.params.expenseId);
    await expenseModel.deleteOne({_id: req.params.expenseId});

    res.send("expense deleted").end();
}

module.exports = {
    getAllExpenses,
    getSingleExpense,
    addExpense,
    udpateExpense,
    deleteExpense
}