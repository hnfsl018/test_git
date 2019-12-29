const router = require("express").Router();
const login = require("../controller/login");
const token = require("../middleware/token");


router.get("/",login.home);
router.post("/login",login.login);
router.post("/content",token,login.content);



module.exports = router;
