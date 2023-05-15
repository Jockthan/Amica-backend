const {AdminModel} = require("../models/admin.model");

async function checkAdmin(req, res, next) {
    const admin = await AdminModel.findOne({email: req.body.email});

    if (!admin) return res.send("Permission denied!").end();

    next();
}

module.exports = {
    checkAdmin
};

//you did not call this function anywhere yet try and call it in the admin dashboard msg from selbi