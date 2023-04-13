const {Schema, model} = require("mongoose");

const stockSchema = Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    price:{
        type: String,
        required: true
    }
})

const stockModel = model("Stock", stockSchema);

module.exports = {
    stockModel
}