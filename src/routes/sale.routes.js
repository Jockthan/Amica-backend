const {Router} = require("express");
const controller = require("../controllers/sales.controller");

const router = Router();

// get all sale
router.get('/', controller.getAllSale);

// get single sale
router.get('/:stockId', controller.getAllSale);

// add new sale
router.post('/', controller.addSale);

// update sale
router.patch('/:saleId', controller.udpateSale);

// delete sale
router.delete('/:saleId', controller.deleteSale);

module.exports.stockRouter = router;