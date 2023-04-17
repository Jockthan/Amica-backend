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
        const check = await UserModel.findOne(req.params.userId)

        if(check.password===req.body.password){
            res.send("Welcome to our dashboard")
        }
        else{
            res.send("wrong password")
        }
    } catch{
        res.send("wrong details")
    }
	// //console.log(req.body);
	// UserModel.findOne({email:req.body.email},function(err,data){
	// 	if(data){
			
	// 		if(data.password==req.body.password){
	// 			//console.log("Done Login");
	// 			// req.session.userId = data.unique_id;
	// 			console.log(req.session.userId);
	// 			res.send({"Success":"Success!"});
				
	// 		}else{
	// 			res.send({"Success":"Wrong password!"});
	// 		}
	// 	}else{
	// 		res.send({"Success":"This Email Is not regestered!"});
	// 	}
	// });
};

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

//forget password
function forgetPassword(req, res, next) {
   	//console.log('req.body');
	//console.log(req.body);
	UserModel.findOne({email:req.body.email},function(err){
		console.log("You can change your password");
		if(!email){
			res.send({"Success":"This Email Is not regestered!"});
		}else{
			// res.send({"Success":"Success!"});
			if (req.body.password===req.body.passwordConf) {
			password=req.body.password;
			passwordConf=req.body.password;

			save(function(err, UserModel){
				if(err)
					console.log(err);
				else
					console.log('Success');
					res.send({"Success":"Password changed!"});
			});
		}else{
			res.send({"Success":"Password does not match! Both Password should be same."});
		}
		}
	});
};

function logoutUser() {
    console.log("You are now logged out")
// 	if (req.session) {
//     // delete session object
//     req.session.destroy(function (err) {
//     	if (err) {
//     		return next(err);
//     	} else {
//     		return res.redirect('/');
//     	}
//     });
// }
};

module.exports = {
    getAllUsers,
    getSingleUser,
    addUser,
    loginUser,
    udpateUser,
    deleteUser,
    forgetPassword,
    logoutUser
}