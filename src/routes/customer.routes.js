const {Router} = require("express");
const controller = require("../controllers/customer.controller");

const router = Router();

// get all customer
router.get('/', controller.getAllCustomers);

// get single customer
router.get('/:customerId', controller.getSingleCustomer);

// add new customer
router.post('/', controller.addCustomer);

// update customer
router.patch('/:customerId', controller.udpateCustomer);

// delete customer
router.delete('/:customerId', controller.deleteCustomer);

module.exports.customerRouter = router;