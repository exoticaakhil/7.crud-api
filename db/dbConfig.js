const mongoose = require('mongoose')

const connectDb = async()=>{
    return await mongoose.connect(process.env.MONGO_DEV)
    .then(res => {
        console.log("mongodb connected successfully")
    }).catch(err=> console.log(err))
}
module.exports = connectDb