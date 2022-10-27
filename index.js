const express = require('express');
const port = 9000;
const app = express()
// mongodb
const db = require('./config/mongoose');
// JWT Strategy for authentication
const passportJWT = require('./config/passport-jwt-strategy');

app.use(express.urlencoded());

// routes
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in connecting the server ${err}`);
    }
    console.log(`Server is running at the port ${port}`);
})