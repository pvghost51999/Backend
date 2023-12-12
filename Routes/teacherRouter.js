const express=require('express');
const verifyToken=require("../middleware/verifyToken");
const teacherRouter=express.Router();
const teacherController=require('../controller/teacherController');

teacherRouter.post("/login",teacherController.signInTeacher);

teacherRouter.post("/signup",teacherController.teacherSignUp);
teacherRouter.post("/result/add",verifyToken,teacherController.addStudent);
teacherRouter.get("/result",teacherController.getAllStudents);
teacherRouter.patch("/result/:rollNo",verifyToken,teacherController.editStudent);
teacherRouter.delete("/result/:rollNo",verifyToken,teacherController.deleteStudent);



module.exports=teacherRouter;