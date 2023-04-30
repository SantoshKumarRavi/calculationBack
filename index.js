const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const quizSchema = require('./quizSchema')
const quiz = mongoose.model('quiz', quizSchema);
const formSchema=require("./formSchema")
const form = mongoose.model('form', formSchema);
require('dotenv').config()
const cors = require('cors');

const corsOption = {
    origin:"*",
};

app.use(cors(corsOption));
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//form
app.post('/form',async (req, res) => {
  const FormDoc = new form(req.body);
  await FormDoc.save().then((val)=>{
    res.send('doc created')
  }).catch((err)=>{
    console.log("err",err);
    res.send('err while created')
  })
})
app.get('/form',async (req, res) => {
  await form.find({}).then((val)=>{
    res.send(val) 
  }).catch((err)=>{
    res.send('err while fetched')
  })
})


app.post('/create',async (req, res) => {
  const QuizDoc = new quiz(req.body);
  await QuizDoc.save().then((val)=>{
    res.send('doc created')
  }).catch((err)=>{
    console.log("err",err);
    res.send('err while created')
  })
})
app.get('/create',async (req, res) => {
  await quiz.find({}).then((val)=>{
    res.send(val) 
  }).catch((err)=>{
    res.send('err while fetched')
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


main().then(()=>console.log("connected db")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.MongoDb_Username}:${process.env.MongoDb_Password}@cluster0.7fr1rmp.mongodb.net/Central?retryWrites=true&w=majority`);//mongodb://127.0.0.1:27017/Quiz
}