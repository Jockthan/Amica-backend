const {Schema, model} = require("mongoose");

const invoiceSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
    },
    sales: [{
        type: Schema.Types.Map,
        ref: "Sales"
    }]
})

const invoiceModel = model("Invoice", invoiceSchema);

module.exports = {
    invoiceModel
}