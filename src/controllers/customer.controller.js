const {customerModel} = require("../models/customer.model");
const validator = require("../validators/customer.validator");
const {formatZodError} = require("../utilities/errormessage");


// get all customers
async function getAllCustomers(req, res) {
    // const customer = customers.find(r => r.id === req.params.customerId);
    const customers = await customerModel.find();

    res.json(customers).end();
}

// get single customer
async function getSingleCustomer(req, res) {
    // customers.push({
    //     ...req.body,
    //     id: (customers.length + 1).toString()
    // });
    const result = validator.getCustomerValidator.safeParse(req.params.customerId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    const customer = await customerModel.findById(req.params.customerId);

    res.json(customer).end();
}

// add new customer
async function addCustomer(req, res) {
    // customers.push({
    //     ...req.body,
    //     id: (customers.length + 1).toString()
    // });
    const result = validator.addCustomerValidator.safeParse(req.body);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await customerModel.create({
        name: req.body.name,
        itemBought: req.body.itemBought,
        phone: req.body.phone,
        debt: req.body.debt
    });

    res.json("customer added").end();
}

// update customer
async function udpateCustomer(req, res) {
    // customers = customers.map(r => {
    //     if (r.id === req.params.customerId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })
    const result = validator.updateCustomerValidator.safeParse(req.params.customerId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await customerModel.updateOne({_id: req.params.customerId}, {...req.body});

    res.json("customer updated successfully!").end();
}

// delete customer
async function deleteCustomer(req, res) {
    // customers = customers.filter(r => r.id !== req.params.customerId);
    const result = validator.deleteCustomerValidator.safeParse(req.params.customerId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await customerModel.deleteOne({_id: req.params.customerId});

    res.json("customer deleted").end();
}

module.exports = {
    getAllCustomers,
    getSingleCustomer,
    addCustomer,
    udpateCustomer,
    deleteCustomer
}