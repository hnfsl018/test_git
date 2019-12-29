const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();
module.exports = verifyToken;

function verifyToken(req,res,next){
    const {authorization} = req.headers;
    console.log("token");
    console.log(authorization);
    if(authorization){   
        const token = authorization.split(' ')[1];
        jwt.verify(token,process.env.TOKEN ,(err)=>{  
            if(err){
                res.send({
                    success:false,
                    message: "you dont have permission",

                })
                console.log(err);
                
            }else {
                console.log("after split : "+token);
                 next();
            }
        })              
    }else {
        res.send({
            success:false,
            message:"Invalid data"
        })
    }
}
