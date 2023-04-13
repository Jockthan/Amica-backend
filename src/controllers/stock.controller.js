const {stockModel} = require("../models/stock.model");

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
    const stock = await stockModel.findById(req.params.stockId);

    res.json(stock).end();
}

// add new stock
async function addStock(req, res) {
    // stocks.push({
    //     ...req.body,
    //     id: (stocks.length + 1).toString()
    // });

    await stockModel.create({
        name: req.body.name,
        type: req.body.type,
        amount: req.body.amount,
        price: req.body.price
    });

    res.send("stock added").end();
}

// update stock
async function udpateStock(req, res) {
    // stocks = stocks.map(r => {
    //     if (r.id === req.params.stockId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })

    await stockModel.updateOne({_id: req.params.stockId}, {...req.body});

    res.send("stock updated successfully!").end();
}

// delete stock
async function deleteStock(req, res) {
    // stocks = stocks.filter(r => r.id !== req.params.stockId);
    await stockModel.deleteOne({_id: req.params.stockId});

    res.send("stock deleted").end();
}

module.exports = {
    getAllStock,
    getSingleStock,
    addStock,
    udpateStock,
    deleteStock
}