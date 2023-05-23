const {Schema, model} = require("mongoose");

const salesSchema = Schema({
    name:{
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
    stock:{
        type: Schema.Types.ObjectId,
        ref: "Stock"
     },
     time : { type : Date, default: Date.now }

})

const salesModel = model("Sales", salesSchema);

module.exports = {
    salesModel
}