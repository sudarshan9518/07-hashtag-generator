const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    caption : String,  // only types
    image : String,
    user : {   // to hold mmultiple  options/properties
        type:mongoose.Schema.Types.ObjectId, 
        ref : "users"
    }
})

const postModel = mongoose.model("posts" , postSchema)

module.exports = postModel;