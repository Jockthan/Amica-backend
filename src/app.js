const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const {customerRouter} = require("./routes/customer.routes");
const {profitandlossRouter} = require("./routes/profitandloss.routes");
const {expenseRouter} = require("./routes/expense.routes");
const {invoiceRouter} = require("./routes/invoice.routes");
const {stockRouter} = require("./routes/stock.routes");
const {salesRouter} = require("./routes/sale.routes");
const {userRouter} = require("./routes/user.routes");

require("dotenv").config();

const app = express();
//const MONGO_URL = "mongodb+srv://Jonah:jockthan@stockbook.4tcxvsd.mongodb.net/amicadb?retryWrites=true&w=majority";

app.use(cors("*"));
app.use(express.json()); // Helps our app to accept json data

app.use('/customers', customerRouter);
app.use('/expenses', expenseRouter);
app.use('/invoices', invoiceRouter);
app.use('/pf', profitandlossRouter);
app.use('/stocks', stockRouter);
app.use('/sales', salesRouter);
app.use('/users', userRouter);

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(3000, () => {
    console.log("express server running...");
  })
}).catch((err) => {
  console.log("Mongo error", err);
})