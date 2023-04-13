const {UserModel} = require("../models/user.model");

// get all user
async function getAllUsers(req, res) {
    // const user = user.find(r => r.id === req.params.userId);
    const user = await UserModel.find();

    res.json(user).end();
}

// get single user
async function getSingleUser(req, res) {
    // user.push({
    //     ...req.body,
    //     id: (user.length + 1).toString()
    // });
    const user = await UserModel.findById(req.params.userId);

    res.json(user).end();
}

// add new user
async function addUser(req, res) {
    // user.push({
    //     ...req.body,
    //     id: (user.length + 1).toString()
    // });

    await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    res.send("user added").end();
}

//login user
async function loginUser(req, res) {
    try {
        const check = await UserModel.findOne({name:req.body.name})

        if(check.password===req.body.password){
            res.send("successfully login to dashboard")
        }
        else{
            res.send("wrong password")
        }
    } catch{
        res.send("wrong details")
    }
}

// update recipe
async function udpateUser(req, res) {
    // user = user.map(r => {
    //     if (r.id === req.params.recipeId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })

    await UserModel.updateOne({_id: req.params.userId}, {...req.body});

    res.send("user details updated successfully!").end();
}

// delete user
async function deleteUser(req, res) {
    // user = user.filter(r => r.id !== req.params.userId);
    await UserModel.deleteOne({_id: req.params.userId});

    res.send("user account has been deleted").end();
}

module.exports = {
    getAllUsers,
    getSingleUser,
    addUser,
    loginUser,
    udpateUser,
    deleteUser
}