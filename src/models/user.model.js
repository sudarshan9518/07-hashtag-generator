const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    // schema validation
    username : {
        type : String,
        unique : true ,// no same tow user have a same name
        required : true
    },
    password : {
        type : String,
        required : true
    }

})



const userModel = mongoose.model("user", userSchema)


module.exports = userModel;