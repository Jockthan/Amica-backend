const {Schema, model} = require("mongoose");

const adminSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const AdminModel = model("Admin", adminSchema);

module.exports = {
    AdminModel
}