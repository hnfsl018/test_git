
const router = require("express").Router();
/*เรียกจาก controller */

const login = require("../controller/login");
const token = require("../middleware/token");

router.get("/data",login.data);
router.get("/user",login.user);
router.get("/Test",login.Test);

router.post("/Login",login.Login); // 1
router.get("/testToken",token.varifire_token,login.TestToken); // 2

router.post("/LoginTest",token.LoginTest,token.varifire_token2,login.TestToken); // 



module.exports = router
