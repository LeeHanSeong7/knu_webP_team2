const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({  
    username: { // pass in config object. and put in validation rules 
      type: String,
      required: true,
      unique: true 
    },
    password: {
      type: String,
      required: true
    },
    state: {
      type: String, 
      required: true,
      default: "logout"
    },
    win: {
      type: Number,
      required: true,
      default: 0
    },
    defeat: {
      type: Number,
      required: true,
      default: 0
    }
  });


// note: no lambda func! (not work!)
UserSchema.pre('save', function(next){
    const user = this      
    bcrypt.hash(user.password, 10,  (error, hash) => {        
      user.password = hash 
      next() 
    }); 
});

const User = mongoose.model('User',UserSchema);
module.exports = User