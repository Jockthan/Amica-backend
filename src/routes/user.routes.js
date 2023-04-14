const {Router} = require("express");
const controller = require("../controllers/user.controller");

const router = Router();

// get all user
router.get('/', controller.getAllUsers);

// get single user
router.get('/:userId', controller.getSingleUser);

// add new user
router.post('/', controller.addUser);

// add login user
router.post('/login', controller.loginUser);

// add forgot password
router.post('/forgotpassword', controller.forgetPassword);

// update user
router.patch('/:userId', controller.udpateUser);

// delete user
router.delete('/:userId', controller.deleteUser);

// logout user
router.get('/logout', controller.logoutUser);

module.exports.userRouter = router;