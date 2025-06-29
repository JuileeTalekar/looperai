const { Signup } = require("../Controllers/AuthController");
const {Signin} = require("../Controllers/AuthController");
const {userVerification} = require("../Middlewares/AuthMiddleWare");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post('/',userVerification)


module.exports = router;