const {Schema, model} = require("mongoose");

const customerSchema = Schema({
    name:{
        type: String,
        required: true,
    },
    itemBought:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
    },
    debt:{
        type: Number,
    }
});

const customerModel = model("Customer", customerSchema);

module.exports = {
    customerModel
}