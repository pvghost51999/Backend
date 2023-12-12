const mongoose=require('mongoose');


const teacherSchema=new mongoose.Schema({

    name:String,
    username:{type:String,unique: true},
    password:String, 
    phone_no:Number

})

const Teacher=mongoose.model("teachers",teacherSchema);

module.exports=Teacher;