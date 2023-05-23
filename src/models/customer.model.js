const {Schema, model} = require("mongoose");

const customerSchema = Schema({
    name:{
        type: String,
        required: true,
    },
    itemBought:{
        type: String,
    },
    phone:{
        type: Number,
    },
    debt:{
        type: Number,
    },
    date:{
        type: Date,
    }
});

const customerModel = model("Customer", customerSchema);

module.exports = {
    customerModel
}