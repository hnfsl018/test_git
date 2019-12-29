
const router = require("express").Router();
/*เรียกจาก controller */

const login = require("../controller/login");
const token = require("../middleware/token");

router.get("/data",login.data);
router.get("/user",login.user);
router.get("/Test",login.Test);
router.post("/Login",login.Login);
router.post("/LoginTest",login.LoginTest,token,login.TestToken);
router.get("/testToken",token,login.TestToken);

module.exports = router
