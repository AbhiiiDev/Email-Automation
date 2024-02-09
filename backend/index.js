const express=require('express');
const emailRoute =require('./routes/emailRoute');
const cors=require('cors');

const app=express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

app.use(cors())

app.use('/email',emailRoute)

app.get('/',(req,res)=>{
    res.send("hey this sever is working bro")
})

app.listen(3000,()=>{
    console.log('server listening on port 3000');
})