const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        author:{
            type:String,
        },
        title:{
            type:String
        },
        picture:{
            type:String
        },
        description:{
            type:String
        },
        Price:{
            type:Number
        },
    },
    {
        timestamps:true,
        versionkey:false
    }
)

//const Post = New mongoose.model('Post', PostSchema)

module.exports = Post = mongoose.model("Post", PostSchema);
