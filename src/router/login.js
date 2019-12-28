
const router = require("express").Router();
/*เรียกจาก controller */

const login = require("../controller/login");

router.get("/data",login.data);
router.get("/user",login.user);
router.get("/Test",login.Test);
router.post("/Login",login.Login);

module.exports = router
