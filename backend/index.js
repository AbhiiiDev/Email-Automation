const express=require('express');
const emailRoute =require('./routes/emailRoute');
const cors=require('cors');

const app=express();



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/',emailRoute)

app.get('/',(req,res)=>{
    res.send("hey i have changed this  sever and it's working bro")
})

app.listen(3000,()=>{
    console.log('server listening on port 3000');
})