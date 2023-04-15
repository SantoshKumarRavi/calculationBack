const mongoose = require('mongoose');
const quizSchema = new mongoose.Schema({
    quiz_name: String,
    description:String,
    grades:String,
    time_limit:Number,
    questions:[{
      question:String,
      options:[String],
      correctAnswerIndex:Number
    }]
  });

module.exports=quizSchema