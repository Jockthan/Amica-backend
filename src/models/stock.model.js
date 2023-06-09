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
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    sales:{
        type: Schema.Types.ObjectId,
        ref: "Sales"
     }
})

const stockModel = model("Stock", stockSchema);

module.exports = {
    stockModel
}