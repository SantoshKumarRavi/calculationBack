const mongoose = require('mongoose');
const quizSchema = new mongoose.Schema({
    name: String,
    age:String,
    sex:String,
    mobileNumber:String,
    aadhar:String,
    pan:String,
    guardian:String,
    email:String,
    emergencyContact:String,
    address:String,
    state:String,
    city:String,
    country:String,
    pincode:String,
    occupation:String,
    religion:String,
    Marital_Status:String,
    Blood_Group:String,
    Nationality:String

  });

module.exports=quizSchema