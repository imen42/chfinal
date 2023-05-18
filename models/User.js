const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = newSchema ({
    fullName:String,
    email:String,
    phone:String
})
module.exports = mongoose.model('User',userSchema);