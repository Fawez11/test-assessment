const router = require('express').Router();
const {getAllUsers} = require("../controllers/usersControllers");

router.get("/getAll",getAllUsers );

module.exports = router;