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

// update user
router.patch('/:userId', controller.udpateUser);

// delete user
router.delete('/:userId', controller.deleteUser);

module.exports.userRouter = router;