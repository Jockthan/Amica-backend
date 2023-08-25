const {salesModel} = require("../models/sales.model");
const {stockModel} = require("../models/stock.model");
const validator = require("../validators/sales.validator")
const {formatZodError} = require("../utilities/errormessage");

 
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
    const result = validator.getSaleValidator.safeParse(req.params.saleId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

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
    const result = validator.addSaleValidator.safeParse(req.body);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

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
    const result = validator.updateSaleValidator.safeParse(req.params.saleId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await salesModel.updateOne({_id: req.params.saleId}, {...req.body});
    // await stockModel.findByIdAndUpdate(stockId, { quantity: stockId.quantity - quantity });

    res.json("sale updated successfully!").end();
}

// delete sale
async function deleteSale(req, res) {
    // sales = sales.filter(r => r.id !== req.params.saleId);
    const result = validator.deleteSaleValidator.safeParse(req.params.saleId);

    if (!result.success){
        return res.status(400).json(formatZodError(result.error.issues)).end();
    }

    await salesModel.deleteOne({_id: req.params.saleId});

    res.json("sale deleted").end();
}

async function getAllSalesSum(req, res){
    const sales = await salesModel.aggregate([
        {
            $group:{
                _id:null,
                totalSales:{$sum:"$price"}
            }
        }
    ]);

    res.json(sales).end();
}

module.exports = {
    getAllSales,
    getAllSalesSum,
    getSingleSale,
    addSale,
    udpateSale,
    deleteSale
}

