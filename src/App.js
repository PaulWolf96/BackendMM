const express = require('express');
const app = express();
const {User} = require('./modelUser');
const {Post} = require('./modelPost');

//const bodyParser = require('body-parser');
//const route = require('./route/Route');
const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/MiniMarket'


//app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(route);

// Conexión
mongoose.connect(DB_URI,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err) => {
        if(err){
            console.log('*** ERROR DE CONEXIÓN ***'); 
        }
        else{
            console.log('*** CONEXIÓN CORRECTA ***');
        }
    });


    

module.exports = app;