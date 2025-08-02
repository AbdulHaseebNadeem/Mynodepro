const express = require('express');
const app = express();
const db = require('./models/db')
const connect =require('./config/connection')
const route = require('./routes/app.routes')
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('This is the Home Page')
})
require('dotenv').config();
app.use("/",route)
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
