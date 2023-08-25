const {Router} = require("express");
const controller = require("../controllers/profitandloss.controller");

const router = Router();

// get all expense
router.get('/', controller.checkreport);

module.exports.profitandlossRouter = router;