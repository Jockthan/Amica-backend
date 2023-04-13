const {Router} = require("express");
const controller = require("../controllers/invoice.controller");

const router = Router();

// get all invoice
router.get('/', controller.getAllInvoice);

// get single invoice
router.get('/:invoiceId', controller.getSingleInvoice);

// add new invoice
router.post('/', controller.addInvoice);

// update invoice
router.patch('/:invoiceId', controller.udpateInvoice);

// delete invoice
router.delete('/:invoiceId', controller.deleteInvoice);

module.exports.invoiceRouter = router;