var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config.js');// THATS HOW WE CAN USE OUR EXT FILE
var mongoose = require('mongoose');
var app=express();
//var api = require('./app/routs/api.js')(app, express);
/*
mongoose.connect(config.database, function(err){
    if(err){
        console.log(err);
    }else {
        console.log('DB connected');
    }
});
*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
//app.use('/api',api);
 

app.get('*', function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(config.port, function(err){
    if(err){
        console.log(err);
    }else {
        console.log('3000 working');
    }

});