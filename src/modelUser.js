const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
            unique:true,
        }
    },
    { 
        timestamps:true,
        versionkey:false
    }
)

//const User = New mongoose.model('User', UserSchema)

module.exports = User = mongoose.model("User", UserSchema);