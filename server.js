var mysql = require('mysql');//has to be installed with npm 
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'fundraising_app'
});
var port = 9000;
var express = require('express');

var app = express();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    next();
});
    connection.connect();
app.get('/transaction', function(req,res){
    
    connection.query('select* from transactions', function(err,rows){
        if(!err){
                console.log('The solution is: ', rows);
                res.end(JSON.stringify(rows));

        }
        else{
                console.log('Error while performing query.');

            }
    });
    //connection.end();
});
app.listen(port);
console.log("Server listening on port"+port);