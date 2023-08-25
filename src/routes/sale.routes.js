const {Router} = require("express");
const controller = require("../controllers/sales.controller");

const router = Router();

// get all sale
router.get('/', controller.getAllSales);

router.get("/sum", controller.getAllSalesSum)

// get single sale
router.get('/:saleId', controller.getSingleSale);

// add new sale
router.post('/:stockId', controller.addSale);

// update sale
router.patch('/:stockId', controller.udpateSale);

// delete sale
router.delete('/:saleId', controller.deleteSale);

module.exports.salesRouter = router;