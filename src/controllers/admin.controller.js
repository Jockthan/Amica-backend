const {AdminModel} = require("../models/admin.model");

async function login(req, res) {
    const admin = await AdminModel.findOne({email: req.body.email});

    if (!admin) return res.send("Admin not found!!").end();

    if (admin.password !== req.body.password) return res.send("Password incorrect!!").end();

    res.json(admin).end();
}

async function register(req, res) {
    await AdminModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    res.send("Admin created!!").end();
}

module.exports = {
    login,
    register
}