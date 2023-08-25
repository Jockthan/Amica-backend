const sales = require("./sales.controller");
const expenses = require("./expense.controller");

async function checkreport(req, res) {
  try {
    const reportSales = await sales.getAllSalesSum();
    const reportExpenses = await expenses.getAllExpensesSum();

    console.log("Your total sales is " + reportSales);
    console.log("Your total expenses is " + reportExpenses);

    if (reportSales > reportExpenses) {
      res.json({
        message: 'You are making profit, keep it up!',
        totalSales: reportSales,
        totalExpenses: reportExpenses
      });
    } else {
      res.json({
        message: 'You are not making profit!',
        totalSales: reportSales,
        totalExpenses: reportExpenses
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = {
  checkreport
};
