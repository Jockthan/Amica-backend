const {Schema, model} = require("mongoose");

const invoiceSchema = Schema({
    customer_name: {
        type: String,
        required: true,
    },
    items: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    time : { type : Date, default: Date.now }
    // location: {
    //     type: String,
    // },
    // sales: [{
    //     type: Schema.Types.Map,
    //     ref: "Sales"
    // }]
})

const invoiceModel = model("Invoice", invoiceSchema);

module.exports = {
    invoiceModel
}