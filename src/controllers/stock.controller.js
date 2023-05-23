const {stockModel} = require("../models/stock.model");
const validator = require("../validators/stock.validator");
const {formatZodError} = require("../utilities/errormessage");

// get all stocks
async function getAllStock(req, res) {
    // const stock = stocks.find(r => r.id === req.params.stockId);
    const stocks = await stockModel.find();

    res.json(stocks).end();
}

// get single stock
async function getSingleStock(req, res) {
    // stocks.push({
    //     ...req.body,
    //     id: (stocks.length + 1).toString()
    // });
    const result = validator.getStockValidator.safeParse(req.params.stockId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }
    const stock = await stockModel.findById(req.params.stockId);

    res.json(stock).end();
}

// add new stock
async function addStock(req, res) {
    // stocks.push({
    //     ...req.body,
    //     id: (stocks.length + 1).toString()
    // });
    const result = validator.addStockValidator.safeParse(req.body);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await stockModel.create({
        name: req.body.name,
        type: req.body.type,
        quantity: req.body.quantity,
        price: req.body.price
    });

    res.status(201).json({message: "Stock added"});
    // res.send("stock added").end();
}

// update stock
async function udpateStock(req, res) {
    // stocks = stocks.map(r => {
    //     if (r.id === req.params.stockId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })
    const result = validator.updateStockValidator.safeParse(req.params.stockId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await stockModel.updateOne({_id: req.params.stockId}, {...req.body});

    res.status(201).json({message: "Update successfully"});
    // res.send("stock updated successfully!").end();
}

// delete stock
async function deleteStock(req, res) {
    // stocks = stocks.filter(r => r.id !== req.params.stockId);
    const result = validator.deleteStockValidator.safeParse(req.params.stockId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }
    
    await stockModel.deleteOne({_id: req.params.stockId});

    res.json("stock deleted").end();
}

module.exports = {
    getAllStock,
    getSingleStock,
    addStock,
    udpateStock,
    deleteStock
}