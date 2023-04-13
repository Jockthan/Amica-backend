const express = require("express");
const mongoose = require("mongoose");
const {customerRouter} = require("./routes/customer.routes");
const {expenseRouter} = require("./routes/expense.routes");
const {invoiceRouter} = require("./routes/invoice.routes");
const {stockRouter} = require("./routes/stock.routes");
const {userRouter} = require("./routes/user.routes");

const app = express();
const MONGO_URL = "mongodb+srv://Jonah:jockthan@stockbook.4tcxvsd.mongodb.net/amicadb?retryWrites=true&w=majority";

app.use(express.json()); // Helps our app to accept json data
app.use('/customers', customerRouter);
app.use('/expenses', expenseRouter);
app.use('/invoices', invoiceRouter);
app.use('/stocks', stockRouter);
app.use('/users', userRouter);

mongoose.connect(MONGO_URL).then(() => {
  app.listen(3000, () => {
    console.log("express server running...");
  })
}).catch((err) => {
  console.log("Mongo error", err);
})