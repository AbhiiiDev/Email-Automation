const express=require('express');
const emailRoute =require('./routes/emailRoute');
const cors=require('cors');

const app=express();

const corsOptions = {
    origin: "https://email-automation-b1qu.vercel.app",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.use('/email',emailRoute)

app.get('/',(req,res)=>{
    res.send("hey this sever is working bro")
})

app.listen(3000,()=>{
    console.log('server listening on port 3000');
})