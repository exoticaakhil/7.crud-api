// db schema
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true,
        unique:true
    },
    mobile: {
        type: String,
        requried: true,
        unique:true
    },
    age: {     
        type: Number,
        requried: true,
        },
    role: {       
        type: String,
        default:""
    },
    address:{
        type: String,
        default:""
    }
},{
    collection:"users",
    timestamps: true
})
module.exports = mongoose.model("User",userSchema)