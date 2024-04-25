import dotenv from 'dotenv';
import configure from './src/configs/index.js';
import express from 'express';
import mongoose from 'mongoose';
const app = express();

app.use(express.json());
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
console.log("Connected to MongoDB !!");
app.listen(configure.PORT, ()=>{
    console.log("Server is listening on port "+configure.PORT);
})
})