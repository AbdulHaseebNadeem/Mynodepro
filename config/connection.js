const mongose = require('mongoose');
require('dotenv').config();

const connect = mongose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to database");

}).catch((err)=>{
    const message = err.message;
    console.log("error in connection", message);

})
module.exports = connect;