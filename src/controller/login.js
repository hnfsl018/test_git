var users = require('../../users'); //
var datas = require('../../data');

//module.exports = varifire_token;
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

module.exports = {
    Login ,
    Test,
    user,
    data,
    TestToken,
    LoginTest,
};



function TestToken (req,res){ 
   
        res.json(datas);

}


function LoginTest(req,res){

     const {username, password} = req.body;
     const result = users.find((users) => {
         return users.username == username && users.password == password;
       })
         if (result) {
             if(username === result.username && password === result.password){
         
             const token = jwt.sign( {data: username},process.env.TOKEN);
             next(token);
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


function Login(req,res){

   // res.json(datas);
    const {username, password} = req.body;
   // console.log(users[0].name);
   // console.log(users.length-1);
  // console.log(users)
    const result = users.find((users) => {
        return users.username == username && users.password == password;
      })
     


        if (result) {
            if(username === result.username && password === result.password){
         //   if(username === "admin" && password === "0000"){
            const token = jwt.sign( {data: username},process.env.TOKEN,{expiresIn:20});
           // res.json(datas);
                res.send({
                    success: true,
                    message: "Login Success",
                    data: token,
                 })
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


function user(req, res) { 
    res.json(users);
}

function data(req, res) {
    res.json(datas);
}

function Test(req,res){

    res.send({
        Test : "Test"
    })

}