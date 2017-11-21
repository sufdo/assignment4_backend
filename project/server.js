const bodyParser=require('body-parser');
const express=require('express');
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
require('./login.model.js');

/*
eg:
const DoctorRequestRouter=require('./doctorRequest.route.js');
*/

const app=express();

app.use(bodyParser.json());

/***********************************************************
mongoose.connect('mongodb://localhost:27017/AF1',err =>{
    if(err){
        console.log(err);
        process.exit(1);
    }
});
*/

allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);

/*
eg:
app.use('/doctorRequest',DoctorRequestRouter);
*/
app.listen(3000,err =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('server is listening on port 3001');
});

module.exports = app;