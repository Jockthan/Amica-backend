const {Router} = require("express");
const controller = require("../controllers/stock.controller");

const router = Router();

// get all stock
router.get('/', controller.getAllStock);

// get single stock
router.get('/:stockId', controller.getSingleStock);

// add new stock
router.post('/', controller.addStock);

// update stock
router.patch('/:stockId', controller.udpateStock);

// delete stock
router.delete('/:stockId', controller.deleteStock);

module.exports.stockRouter = router;