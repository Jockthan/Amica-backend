const {salesModel} = require("../models/sales.model");
const {stockModel} = require("../models/stock.model");
 
// get all sales
async function getAllSales(req, res) {
    // const sale = sales.find(r => r.id === req.params.saleId);
    const sales = await salesModel.find();

    res.json(sales).end();
}

// get single sale
async function getSingleSale(req, res) {
    // sales.push({
    //     ...req.body,
    //     id: (sales.length + 1).toString()
    // });
    const sale = await salesModel.findById(req.params.saleId);

    res.json(sale).end();
}

// add new sale

async function addSale(req, res) {
    mkt = req.body.quantity
    console.log(typeof mkt);

    // sales.push({
    //     ...req.body,
    //     id: (sales.length + 1).toString()
    // });
    
    // console.log(typeof req.body.quantity);
    
    const stock = await stockModel.findById(req.params.stockId);
    // res.json(stock).end();
 
    // Check if the requested quantity is available
    if (mkt > stock.quantity) {
      return res.status(400).json({ error: 'Requested quantity not available' });
    }

    // stock.quantity -= quantity
    // stock.save()

    try {
        await salesModel.create({
            name: req.body.name,
            type: req.body.type,
            quantity: req.body.quantity,
            price: req.body.price
        });
    } catch(e) {
        return  res.status(400).json({error: 'An errror occured'})
    }

    await stockModel.updateOne({_id: req.params.stockId}, {quantity: stock.quantity -= mkt});

    res.status(201).json({message: "Sale added"});
    // res.send("sale added").end();
}
// update sale
async function udpateSale(req, res) {
    // sales = sales.map(r => {
    //     if (r.id === req.params.saleId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })

    await salesModel.updateOne({_id: req.params.saleId}, {...req.body});
    // await stockModel.findByIdAndUpdate(stockId, { quantity: stockId.quantity - quantity });

    res.json("sale updated successfully!").end();
}

// delete sale
async function deleteSale(req, res) {
    // sales = sales.filter(r => r.id !== req.params.saleId);
    await salesModel.deleteOne({_id: req.params.saleId});

    res.json("sale deleted").end();
}

module.exports = {
    getAllSales,
    getSingleSale,
    addSale,
    udpateSale,
    deleteSale
}