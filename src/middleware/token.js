const jwt = require("jsonwebtoken");
var users = require('../../users');
module.exports = {
    varifire_token,
    varifire_token2,
    LoginTest,
};
let token

const env = require("dotenv");
env.config();

function LoginTest(req,res,next){

    const {username, password} = req.body;
    const result = users.find((users) => {
        return users.username == username && users.password == password;
      })
        if (result) {
            if(username === result.username && password === result.password){
        
            token = jwt.sign( {data: username},process.env.TOKEN,{expiresIn:20});
            next()
            
            }else {
                res.send({
                    success: false,
                    message: "invalid data",
                })
            }
            
        }else {
            res.send({
              success: false,
              message: "invalid data 2",
            })
        }

    
}

//************************************************ */
function varifire_token2(req,res,next){
    //console.log(req.headers);
 //   const {authorization} = req.headers;
  //   console.log(authorization);
console.log(token);
    if(token){
    //    console.log(authorization);
       // const token = authorization.slice(7);
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
/*************************************************** */



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