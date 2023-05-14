import mongoose from "mongoose"
const calculationSchema = new mongoose.Schema({
    calculation: String,
    name:String,
    result:String,
  });

module.exports=calculationSchema