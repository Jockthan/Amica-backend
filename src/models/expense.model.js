const {Schema, model} = require("mongoose");

const expenseSchema = Schema({
    description:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    time : { type : Date, default: Date.now }
});

const expenseModel = model("Expense", expenseSchema);

module.exports = {
    expenseModel
}