const {invoiceModel} = require("../models/invoice.model");

// get all invoices
async function getAllInvoice(req, res) {
    // const invoice = invoices.find(r => r.id === req.params.invoiceId);
    const invoices = await invoiceModel.find();

    res.json(invoices).end();
}

// get single invoice
async function getSingleInvoice(req, res) {
    // invoices.push({
    //     ...req.body,
    //     id: (invoices.length + 1).toString()
    // });
    const invoice = await invoiceModel.findById(req.params.invoiceId);

    res.json(invoice).end();
}

// add new invoice
async function addInvoice(req, res) {
    // invoices.push({
    //     ...req.body,
    //     id: (invoices.length + 1).toString()
    // });

    await invoiceModel.create({
        name: req.body.name,
        amount: req.body.amount,
        location: req.body.location
    });

    res.json("invoice added").end();
}

// update invoice
async function udpateInvoice(req, res) {
    // invoices = invoices.map(r => {
    //     if (r.id === req.params.invoiceId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })

    await invoiceModel.updateOne({_id: req.params.invoiceId}, {...req.body});

    res.send("invoice updated successfully!").end();
}

// delete invoice
async function deleteInvoice(req, res) {
    // invoices = invoices.filter(r => r.id !== req.params.invoiceId);
    await invoiceModel.deleteOne({_id: req.params.invoiceId});

    res.send("invoice deleted").end();
}

module.exports = {
    getAllInvoice,
    getSingleInvoice,
    addInvoice,
    udpateInvoice,
    deleteInvoice
}