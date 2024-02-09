const express=require('express');
const nodemailer=require('nodemailer');
const dotenv=require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass:process.env.SMTP_PASS ,
    },
    debug: true 
  });

  const sendEmail= async (req,res)=>{
const {email,name}=req.body;
console.log(email,name);

let emailOptions={
    from: process.env.SMTP_USER, // sender address
    to: email, // list of receivers
    subject: `Nodemailer working fine Bro :)`, // Subject line
    text: "Thanks for subscribing man !!!!", // plain text body
    html: "<b>Hola  Amigo, Kaise ho ? theek ho ?</b>", // html body
}
try {
  const info=await transporter.sendMail(emailOptions);
res.status(200).json({
  success:true,
  data:{email,name}, 
  
})
console.log('email sent successfully')
} catch (error) {
  console.log(error);
}


}

module.exports={sendEmail};