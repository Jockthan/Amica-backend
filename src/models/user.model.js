const {Schema, model} = require("mongoose");

const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type:String,
        default: "User",
        enum: ["Admin", "User"]
     },
     stock: [{
        type: Schema.Types.Map,
        ref: 'Stock'
     }],
     sales: [{
        type: Schema.Types.Map,
        ref: 'Sales'
     }],
     invoice: [{
        type: Schema.Types.Map,
        ref: 'Invoice'
     }],
     expense: [{
        type: Schema.Types.Map,
        ref: 'Expense'
     }],
     customer: [{
        type: Schema.Types.Map,
        ref: 'Expense'
     }]
});

const UserModel = model("User", userSchema);

module.exports = {
    UserModel
}