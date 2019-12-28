var users = require('../../users'); //
var datas = require('../../data');
module.exports = {
    Login ,
    Test,
    user,
    data,
};

function Login (req,res){
const {Username} = req.body;
    res.send({
        Test : "Login Test",
        data : Username
    })


}


function user(req, res) { 
    res.json(users.findAll());
}

function data(req, res) {
    res.json(datas);
}

function Test(req,res){

    res.send({
        Test : "Test"
    })

}