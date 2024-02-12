const express=require('express');
const {sendEmail} = require('../controller/emailController');


const router=express.Router();

router.post('/sendEmail',sendEmail);

module.exports=router;