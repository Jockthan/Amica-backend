const {CustomerModel} = require("../models/customer.model");

// get all customers
async function getAllCustomers(req, res) {
    // const customer = customers.find(r => r.id === req.params.customerId);
    const customers = await CustomerModel.find();

    res.json(customers).end();
}

// get single customer
async function getSingleCustomer(req, res) {
    // customers.push({
    //     ...req.body,
    //     id: (customers.length + 1).toString()
    // });
    const customer = await CustomerModel.findById(req.params.customerId);

    res.json(customer).end();
}

// add new customer
async function addCustomer(req, res) {
    // customers.push({
    //     ...req.body,
    //     id: (customers.length + 1).toString()
    // });

    await CustomerModel.create({
        name: req.body.name,
        itemBought: req.body.itemBought,
        phone: req.body.phone,
        debt: req.body.debt
    });

    res.send("customer added").end();
}

// update customer
async function udpateCustomer(req, res) {
    // customers = customers.map(r => {
    //     if (r.id === req.params.customerId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })

    await CustomerModel.updateOne({_id: req.params.customerId}, {...req.body});

    res.send("customer updated successfully!").end();
}

// delete customer
async function deleteCustomer(req, res) {
    // customers = customers.filter(r => r.id !== req.params.customerId);
    await CustomerModel.deleteOne({_id: req.params.customerId});

    res.send("customer deleted").end();
}

module.exports = {
    getAllCustomers,
    getSingleCustomer,
    addCustomer,
    udpateCustomer,
    deleteCustomer
}