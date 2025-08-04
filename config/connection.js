const mongose = require('mongoose');
require('dotenv').config();

const connect = mongose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("connected to database");
    console.log("Mongo URI:", process.env.MONGODB_URI);

}).catch((err)=>{
    const message = err.message;
    console.log("error in connection", message);

})
module.exports = connect;