import mongoose from "mongoose"
const calculationSchema = new mongoose.Schema({
    calculation: String,
    name:String,
    result:String,
  });
const CalculationHistroy = mongoose.model('history', calculationSchema);
module.exports=CalculationHistroy