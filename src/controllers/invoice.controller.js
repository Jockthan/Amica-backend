const {InvoiceModel} = require("../models/invoice.model");

// get all invoices
async function getAllInvoice(req, res) {
    // const invoice = invoices.find(r => r.id === req.params.invoiceId);
    const invoices = await InvoiceModel.find();

    res.json(invoices).end();
}

// get single invoice
async function getSingleInvoice(req, res) {
    // invoices.push({
    //     ...req.body,
    //     id: (invoices.length + 1).toString()
    // });
    const invoice = await InvoiceModel.findById(req.params.invoiceId);

    res.json(invoice).end();
}

// add new invoice
async function addInvoice(req, res) {
    // invoices.push({
    //     ...req.body,
    //     id: (invoices.length + 1).toString()
    // });

    await InvoiceModel.create({
        name: req.body.name,
        amount: req.body.amount,
        location: req.body.location
    });

    res.send("invoice added").end();
}

// update invoice
async function udpateInvoice(req, res) {
    // invoices = invoices.map(r => {
    //     if (r.id === req.params.invoiceId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })

    await InvoiceModel.updateOne({_id: req.params.invoiceId}, {...req.body});

    res.send("invoice updated successfully!").end();
}

// delete invoice
async function deleteInvoice(req, res) {
    // invoices = invoices.filter(r => r.id !== req.params.invoiceId);
    await InvoiceModel.deleteOne({_id: req.params.invoiceId});

    res.send("invoice deleted").end();
}

module.exports = {
    getAllInvoice,
    getSingleInvoice,
    addInvoice,
    udpateInvoice,
    deleteInvoice
}