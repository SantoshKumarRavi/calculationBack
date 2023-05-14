import { Request, Response } from 'express';
import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import CalculatorScema from './CalculatorScema.js';
const app = express()
const port = 3000
// const CalculatorScema = require('./CalculatorScema')

// require('dotenv').config()
dotenv.config()
// const cors = require('cors');

const corsOption = {
    origin:"*",
};

app.use(cors(corsOption));
app.use(cors())
app.use(express.json());

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

//calculation
app.post('/calculation',async (req:Request, res:Response) => {
  const SavedDoc = new CalculatorScema(req.body);
  await SavedDoc.save().then((val:any)=>{
    res.send('doc created')
  }).catch((err:any)=>{
    console.log("err",err);
    res.send('err while created')
  })
})
app.get('/calculation',async (req:Request, res:Response) => {
  await CalculatorScema.find({}).then((val:any)=>{
    res.send(val) 
  }).catch((err:any)=>{
    res.send('err while fetched')
  })
})

app.put('/calculation',async (req:Request, res:Response) => {
  let objId=new mongoose.Types.ObjectId(req.body._id)
  await CalculatorScema.findOneAndUpdate({_id:objId},req.body).then((val:any)=>{
    res.send("doc updated") 
  }).catch((err:any)=>{
    res.send('err while fetched')
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


main().then(()=>console.log("connected db")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.MongoDb_Username}:${process.env.MongoDb_Password}@cluster0.7fr1rmp.mongodb.net/Central?retryWrites=true&w=majority`);
}