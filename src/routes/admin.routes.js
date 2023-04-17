const {Router} = require("express");
const {login, register} = require("../controllers/admin.controller");

const router = Router();

router.post("/adminlogin", login);
router.post("/adminregister", register);

module.exports = {
    adminRouter: router
}