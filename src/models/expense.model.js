const {Schema, model} = require("mongoose");

const expenseSchema = Schema({
    date:{
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
});

const expenseModel = model("Expense", expenseSchema);

module.exports = {
    expenseModel
}