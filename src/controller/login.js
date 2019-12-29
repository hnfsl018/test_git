const jwt = require("jsonwebtoken");
var fs=require('fs');
const env = require("dotenv");
env.config();
module.exports = {
    home,
    login,
    content
    
};

function home(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});  
  var myStream=fs.createReadStream('../bfee/src/views/index.html','utf8');    
  myStream.pipe(res); 
}

// var data ={
//     "name":"soresse",
//     "password":"123"
// }


function login(req,res){
    const {username,password} = req.body;
    fs.readFile("../bFee/src/dataLogin.json",'utf8',function(err,d){
    data = JSON.parse(d);
   console.log("gg");
   console.log(data);
     var f = data.find(function(data){
        return data.name==username&&data.password==password;
     });
     f=  JSON.stringify(f);

     if(f!=null){
        console.log("yes");
        const token = jwt.sign({data:data.name},process.env.TOKEN,{ expiresIn: 30 });
        res.send({
            success:true,
            message:"Login Successful",
            data    : token
        })
      
        console.log(token);
    }else {
        console.log("no");
        res.end("Invalid ");
    }
    });


}

function content(req,res){
     res.end("content");
}
