const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv");
const router = require('./router/index');
env.config();
app.use(bodyParser.json());
app.use(router.login);





app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
);