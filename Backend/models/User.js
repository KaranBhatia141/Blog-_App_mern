const mongoose = require('mongoose'); // it provide us ODM 

const userSchema = new mongoose.Schema({  // it provide us structure formate of data base 
    username:{
        type:String,   //define the type 
        required:true, // required it mean necessary
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

let User = mongoose.model('User', userSchema);   // store schema into user variable 
module.exports = User;  // export user model 