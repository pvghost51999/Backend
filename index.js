const express=require('express');

const teacherRouter=require('./Routes/teacherRouter');
const studentRouter=require('./Routes/studentRouter');
const path = require("path");
const cors=require('cors');
require('dotenv').config();
require('./config')

const flash=require('express-flash');
const bodyParser=require('body-parser')
const app=express();


app.use(express.static(path.join(__dirname,"/build")));


app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname,"/build/index.html"));
}) 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// Use the teacherRouter for routes starting with '/teacher'
app.use('/teacher',teacherRouter);

// Use the studentRouter for routes starting with '/student'
app.use('/student',studentRouter);

port=process.env.PORT;

app.listen(port,()=>{

    console.log("server started at 6060");
})

