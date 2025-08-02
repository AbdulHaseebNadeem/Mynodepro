const mongose = require('mongoose');

const UserSchema = new mongose.Schema({
    name:{
        type:String,
        require:true,
    

    },
    email:{
        type:String,
        require:true,
        unique:true
    
    },
    password:{
        type:String,
        require:true,
    }
})
module.exports = mongose.model('User',UserSchema);