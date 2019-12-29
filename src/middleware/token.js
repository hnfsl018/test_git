const jwt = require("jsonwebtoken");
module.exports = varifire_token;
const env = require("dotenv");
env.config();

function varifire_token(req,res,next){
    //console.log(req.headers);
    const {authorization} = req.headers;
     console.log(authorization);

    if(authorization){
    //    console.log(authorization);
        const token = authorization.slice(7);
      // const token = authorization;
        jwt.verify(token,process.env.TOKEN, (err,decoder) => {
            if(err){
            res.send({
            success : false,
            message : "You don't have permission"
        })
            }else {
                console.log(decoder.data);
             //   console.log(authorization);
                next();
            }
        })
        // res.send({
        //     success : true,
        //     data : authorization
        // })
    }else {
        res.send({
            success : false,
            message : "Invalid datatoken"
        })
    } 

}