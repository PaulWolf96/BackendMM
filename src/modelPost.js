const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        author:{
            type:mongoose.Types.ObjectId,
        },
        title:{
            type:String
        },
        picture:{
            type:Image
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

const Post = New mongoose.model('Post', PostSchema)

module.exports = {Post}
