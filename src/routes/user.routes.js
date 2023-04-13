const {Router} = require("express");
const controller = require("../controllers/user.controller");

const router = Router();

// get all recipes
router.get('/', controller.getAllUsers);

// get single recipe
router.get('/:userId', controller.getSingleUser);

// add new recipe
router.post('/', controller.addUser);

// update recipe
router.patch('/:userId', controller.udpateUser);

// delete recipe
router.delete('/:userId', controller.deleteUser);

module.exports.userRouter = router;