const express=require('express');
const studentController=require('../controller/studentController');
const studentRouter=express.Router();

studentRouter.post("/login",studentController.studentLogin);


module.exports=studentRouter;

