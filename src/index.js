const express = require("express");
const app = express();
const bodyParser = require("body-parser");
/* import มาเพื่อเรียกใช้config ต่างๆ */
const env = require("dotenv");


const router = require("./router/index")

env.config();
app.use(bodyParser.json());

app.use(router.login);

app.use(async (req, res, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${req.method} ${req.url} - ${ms}ms`);
});


app.use((req, res, err) => {
    res.status(400).json({message: err.message})
});
app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
);